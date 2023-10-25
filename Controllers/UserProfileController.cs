using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpinnersCapstone.Data;
using SpinnersCapstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private SpinnersCapstoneDbContext _dbContext;
    public UserProfileController(SpinnersCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.UserProfiles.ToList());
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetUserProfileById(int id)
    {
        var userProfile = _dbContext.UserProfiles
        .Include(up => up.IdentityUser)
        .Select(up => new UserProfile
        {
            Id = up.Id,
            FirstName = up.FirstName,
            LastName = up.LastName,
            Address = up.Address,
            Email = up.IdentityUser.Email,
        })
        .FirstOrDefault(up => up.Id == id);



        if (userProfile == null)
        {
            return NotFound(); // Return 404 Not Found if the user profile is not found.
        }

        return Ok(userProfile);

    }
}