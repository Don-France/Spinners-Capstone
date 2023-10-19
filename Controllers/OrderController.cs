using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpinnersCapstone.Data;
using SpinnersCapstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private SpinnersCapstoneDbContext _dbContext;
    public OrderController(SpinnersCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Orders.ToList());
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetById(int id)
    {
        Order order = _dbContext
            .Orders

            .Include(o => o.Records)
            .ThenInclude(r => r.RecordWeight)
            .Include(o => o.Records)
            .ThenInclude(r => r.SpecialEffect)
            .Include(o => o.Records)
            .ThenInclude(r => r.RecordColors)
            .ThenInclude(rc => rc.Color)
            .SingleOrDefault(o => o.Id == id);

        if (order == null)
        {
            return NotFound();
        }

        return Ok(order);
    }


}