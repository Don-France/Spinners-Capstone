using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpinnersCapstone.Data;
using SpinnersCapstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ColorController : ControllerBase
{
    private SpinnersCapstoneDbContext _dbContext;
    public ColorController(SpinnersCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Colors.ToList());
    }

    [HttpDelete("{id}/delete")]
    [Authorize(Roles = "Admin")]
    public IActionResult DeleteAColor(int id)
    {
        // IdentityRole role = _dbContext.Roles.SingleOrDefault(r => r.Name == "Admin");
        Color colorToDelete = _dbContext.Colors.SingleOrDefault(c => c.Id == id);
        if (colorToDelete == null)
        {
            return NotFound();
        }
        _dbContext.Colors.Remove(colorToDelete);
        _dbContext.SaveChanges();
        return NoContent();

    }
    [HttpGet("{id}")]
    [Authorize]
    public IActionResult GetColorById(int id)
    {
        Color color = _dbContext.Colors

        .FirstOrDefault(c => c.Id == id);

        if (color == null)
        {
            return NotFound();
        }
        return Ok(color);


    }
}