using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Models;

public class Record
{
    public int Id { get; set; }

    public int RecordWeightId { get; set; }
    public RecordWeight RecordWeight { get; set; }
    public int SpecialEffectId { get; set; }
    public SpecialEffect SpecialEffect { get; set; }

    public int OrderId { get; set; }
    public Order Order { get; set; }
    public List<RecordColor> RecordColors { get; set; }
    public int Quantity { get; set; }


}