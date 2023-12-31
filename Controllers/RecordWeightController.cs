using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpinnersCapstone.Data;
using SpinnersCapstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecordWeightController : ControllerBase
{
    private SpinnersCapstoneDbContext _dbContext;
    public RecordWeightController(SpinnersCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.RecordWeights.ToList());
    }
}