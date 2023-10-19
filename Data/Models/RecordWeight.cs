using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Models;

public class RecordWeight
{
    public int Id { get; set; }

    public int Weight { get; set; }

    public decimal Price { get; set; }

}