using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Models;

public class Order
{
    public int Id { get; set; }

    public DateTime OrderDate { get; set; }
    public int UserProfileId { get; set; }

    public UserProfile UserProfile { get; set; }

    public List<Record> Records { get; set; }
    public decimal? Total
    {
        get
        {
            decimal TotalCost = 0.0M;
            if (Records != null)
            {
                foreach (Record r in Records)
                {
                    if (r.RecordWeight != null && r.SpecialEffect != null)
                    {
                        TotalCost += (r.RecordWeight.Price + r.SpecialEffect.Price) * r.Quantity;
                    }
                }

            };
            return TotalCost;
        }
    }


}