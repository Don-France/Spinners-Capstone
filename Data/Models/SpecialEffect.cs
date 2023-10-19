using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Models;

public class SpecialEffect
{
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Price { get; set; }
    public string ImageUrl { get; set; }

}