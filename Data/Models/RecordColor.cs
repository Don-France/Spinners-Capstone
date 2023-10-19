using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;

namespace SpinnersCapstone.Models;

public class RecordColor
{
    public int Id { get; set; }

    public int ColorId { get; set; }
    public Color Color { get; set; }

    public int RecordId { get; set; }
    public Record Record { get; set; }



}