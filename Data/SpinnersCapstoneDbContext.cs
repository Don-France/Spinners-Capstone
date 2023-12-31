using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using SpinnersCapstone.Models;
using Microsoft.AspNetCore.Identity;

namespace SpinnersCapstone.Data;
public class SpinnersCapstoneDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<Order> Orders { get; set; }
    public DbSet<Record> Records { get; set; }
    public DbSet<RecordWeight> RecordWeights { get; set; }
    public DbSet<SpecialEffect> SpecialEffects { get; set; }
    public DbSet<RecordColor> RecordColors { get; set; }
    public DbSet<Color> Colors { get; set; }

    public DbSet<UserProfile> UserProfiles { get; set; }

    public SpinnersCapstoneDbContext(DbContextOptions<SpinnersCapstoneDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
        {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "admina@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
        {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile
        {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Admina",
            LastName = "Strator",
            Address = "101 Main Street",
        });

        modelBuilder.Entity<Order>().HasData(new Order[]
        {
            new Order
            {Id = 1, UserProfileId = 1, OrderDate = DateTime.Now},

        });
        modelBuilder.Entity<Record>().HasData(new Record[]
        {
            new Record
            {Id = 1, RecordWeightId = 1, SpecialEffectId = 1, OrderId = 1, Quantity = 50
            },
            new Record
            {Id = 2, RecordWeightId = 1, SpecialEffectId = 2, OrderId = 1, Quantity = 100
            },


        });
        modelBuilder.Entity<RecordWeight>().HasData(new RecordWeight[]
        {
            new RecordWeight
            {Id = 1, Weight = 130, Price = 5M},
            new RecordWeight
            {Id = 2, Weight = 180, Price = 7.5M}
        });

        modelBuilder.Entity<SpecialEffect>().HasData(new SpecialEffect[]
        {
            new SpecialEffect
            {Id = 1, Name = "BiColor", Price = 1M, ImageUrl = "https://i.postimg.cc/Zn8S5J57/stand-COLORS-half-Nhalf-scaled-removebg-preview.png"},
            new SpecialEffect
            {Id = 2, Name = "Splatter", Price = 2M, ImageUrl = "https://i.postimg.cc/Y2zDMdNq/stand-COLORS-3color-SPLATTER-scaled-removebg-preview.png"},
            new SpecialEffect
            {Id = 3, Name = "Swirl", Price = 1.5M, ImageUrl = "https://i.postimg.cc/hG8TT5tX/mixed-COLORS-blue-WHO-scaled-removebg-preview.png"},
             new SpecialEffect
            {Id = 4, Name = "None", Price = 0M },

        });
        modelBuilder.Entity<RecordColor>().HasData(new RecordColor[]
        {
            new RecordColor
            {Id = 1, ColorId = 1, RecordId = 1 },
            new RecordColor
            {Id = 2, ColorId = 2, RecordId = 2 },
            new RecordColor
            {Id = 3, ColorId = 3, RecordId = 1},

        });
        modelBuilder.Entity<Color>().HasData(new Color[]
        {
            new Color
            {Id = 1, Name = "Red", ImageUrl = "https://i.postimg.cc/zvkfbtXp/stand-COLORS-red-OPAQUE-scaled-removebg-preview.png"},
            new Color
            {Id = 2, Name = "Leaf Green", ImageUrl = "https://i.postimg.cc/y8QrCtZK/stand-COLORS-leaf-GREENopaque-scaled-removebg-preview.png"},
            new Color
            {Id = 3, Name = "Blue", ImageUrl = "https://i.postimg.cc/02rwH4PD/stand-COLORS-blue-OPAQUE-scaled-removebg-preview.png"},
            new Color
            {Id = 4, Name = "Orange", ImageUrl = "https://i.postimg.cc/7bvw9bqB/stand-COLORS-orange-OPAQUE-scaled-removebg-preview.png"},
            new Color
            {Id = 5, Name = "Purple", ImageUrl = "https://i.postimg.cc/xd7f86WD/stand-COLORS-purple-OPAQUE-scaled-removebg-preview.png"},
            new Color
            {Id = 6, Name = "Glass Clear", ImageUrl = "https://i.postimg.cc/W3n5Syjx/stand-COLORS-glass-CLEAR-scaled-removebg-preview.png"},
            new Color
            {Id = 7, Name = "White", ImageUrl = "https://i.postimg.cc/TPW87fHF/stand-COLORS-white-scaled-removebg-preview.png"},
            new Color
            {Id = 8, Name = "Black", ImageUrl = "https://i.postimg.cc/76Y3PZ8Q/stand-COLORS-black-scaled-removebg-preview.png"},
             new Color
            {Id = 9, Name = "Pink", ImageUrl = "https://i.postimg.cc/jjvf1Yw6/stand-COLORS-pink-OPAQUE-scaled-removebg-preview.png"},

        });

    }
}