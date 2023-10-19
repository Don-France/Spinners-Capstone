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
            {Id = 1, Weight = 130, Price = 50},
            new RecordWeight
            {Id = 2, Weight = 180, Price = 75}
        });

        modelBuilder.Entity<SpecialEffect>().HasData(new SpecialEffect[]
        {
            new SpecialEffect
            {Id = 1, Name = "BiColor", Price = 50, ImageUrl = ""},
            new SpecialEffect
            {Id = 2, Name = "Splatter", Price = 100, ImageUrl = ""},
            new SpecialEffect
            {Id = 3, Name = "Swirl", Price = 75, ImageUrl = ""},

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
            {Id = 1, Name = "Red", ImageUrl = "data:image/jpeg;base64,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"},
            new Color
            {Id = 2, Name = "Green", ImageUrl = ""},
            new Color
            {Id = 3, Name = "Blue", ImageUrl = ""},
            new Color
            {Id = 4, Name = "Orange", ImageUrl = ""},
            new Color
            {Id = 5, Name = "Purple", ImageUrl = ""},
            new Color
            {Id = 6, Name = "Clear", ImageUrl = ""},
            new Color
            {Id = 7, Name = "Yellow", ImageUrl = ""},
            new Color
            {Id = 8, Name = "Black", ImageUrl = ""},

        });

    }
}