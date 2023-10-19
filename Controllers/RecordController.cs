using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpinnersCapstone.Data;
using SpinnersCapstone.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace SpinnersCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecordController : ControllerBase
{
    private SpinnersCapstoneDbContext _dbContext;
    public RecordController(SpinnersCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.Records.ToList());
    }

    [HttpPost("create")]
    // [Authorize]
    public IActionResult CreateARecordOrder([FromBody] Record record)
    {
        var user = _dbContext.UserProfiles.FirstOrDefault(u => u.IdentityUserId == u.IdentityUser.Id);
        if (user == null)
        {
            return NotFound("User does not exist");
        }


        var newOrder = new Order
        {
            OrderDate = DateTime.Now,
            UserProfileId = user.Id,
            // Total = 0.0M
        };

        _dbContext.Orders.Add(newOrder);
        _dbContext.SaveChanges();

        var newRecord = new Record
        {
            RecordWeightId = record.RecordWeightId,
            SpecialEffectId = record.SpecialEffectId,
            Quantity = record.Quantity,
            OrderId = newOrder.Id,
            RecordColors = new List<RecordColor>()
        };

        if (record.RecordColors != null && record.RecordColors.Any())
        {
            foreach (var colorChoice in record.RecordColors)
            {
                var color = _dbContext.Colors.Find(colorChoice.ColorId);
                if (color != null)
                {

                    newRecord.RecordColors.Add(new RecordColor { ColorId = colorChoice.ColorId, RecordId = newRecord.Id });
                }
            }
        }

        _dbContext.Records.Add(newRecord);
        _dbContext.SaveChanges();
        newRecord.RecordColors = _dbContext.RecordColors.Where(rc => rc.RecordId == newRecord.Id).ToList();
        return Ok(newRecord);
    }


}