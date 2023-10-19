﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SpinnersCapstone.Data;

#nullable disable

namespace Spinners_Capstone.Migrations
{
    [DbContext(typeof(SpinnersCapstoneDbContext))]
    [Migration("20231019184838_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                            ConcurrencyStamp = "4bb1038e-131f-4b0a-b0ed-d52593ca2644",
                            Name = "Admin",
                            NormalizedName = "admin"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "ae70b9e1-a670-445f-85ab-86e34957d932",
                            Email = "admina@strator.comx",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAEGQrh1t8gJ/kAYe57qlne4kNOhxQhfgZQCTzL2nFE3Gw6+ASnKKokPhv3DTg8C2MQQ==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "374eac0b-808e-4c62-8cf1-2cbf6fd1f356",
                            TwoFactorEnabled = false,
                            UserName = "Administrator"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Color", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ImageUrl")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Colors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            ImageUrl = "data:image/jpeg;base64,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",
                            Name = "Red"
                        },
                        new
                        {
                            Id = 2,
                            ImageUrl = "",
                            Name = "Green"
                        },
                        new
                        {
                            Id = 3,
                            ImageUrl = "",
                            Name = "Blue"
                        },
                        new
                        {
                            Id = 4,
                            ImageUrl = "",
                            Name = "Orange"
                        },
                        new
                        {
                            Id = 5,
                            ImageUrl = "",
                            Name = "Purple"
                        },
                        new
                        {
                            Id = 6,
                            ImageUrl = "",
                            Name = "Clear"
                        },
                        new
                        {
                            Id = 7,
                            ImageUrl = "",
                            Name = "Yellow"
                        },
                        new
                        {
                            Id = 8,
                            ImageUrl = "",
                            Name = "Black"
                        });
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("UserProfileId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserProfileId");

                    b.ToTable("Orders");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            OrderDate = new DateTime(2023, 10, 19, 13, 48, 37, 811, DateTimeKind.Local).AddTicks(5490),
                            UserProfileId = 1
                        });
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Record", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("OrderId")
                        .HasColumnType("integer");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<int>("RecordWeightId")
                        .HasColumnType("integer");

                    b.Property<int>("SpecialEffectId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("RecordWeightId");

                    b.HasIndex("SpecialEffectId");

                    b.ToTable("Records");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            OrderId = 1,
                            Quantity = 50,
                            RecordWeightId = 1,
                            SpecialEffectId = 1
                        },
                        new
                        {
                            Id = 2,
                            OrderId = 1,
                            Quantity = 100,
                            RecordWeightId = 1,
                            SpecialEffectId = 2
                        });
                });

            modelBuilder.Entity("SpinnersCapstone.Models.RecordColor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ColorId")
                        .HasColumnType("integer");

                    b.Property<int>("RecordId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ColorId");

                    b.HasIndex("RecordId");

                    b.ToTable("RecordColors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            ColorId = 1,
                            RecordId = 1
                        },
                        new
                        {
                            Id = 2,
                            ColorId = 2,
                            RecordId = 2
                        },
                        new
                        {
                            Id = 3,
                            ColorId = 3,
                            RecordId = 1
                        });
                });

            modelBuilder.Entity("SpinnersCapstone.Models.RecordWeight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.Property<int>("Weight")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("RecordWeights");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Price = 50m,
                            Weight = 130
                        },
                        new
                        {
                            Id = 2,
                            Price = 75m,
                            Weight = 180
                        });
                });

            modelBuilder.Entity("SpinnersCapstone.Models.SpecialEffect", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ImageUrl")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.ToTable("SpecialEffects");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            ImageUrl = "",
                            Name = "BiColor",
                            Price = 50m
                        },
                        new
                        {
                            Id = 2,
                            ImageUrl = "",
                            Name = "Splatter",
                            Price = 100m
                        },
                        new
                        {
                            Id = 3,
                            ImageUrl = "",
                            Name = "Swirl",
                            Price = 75m
                        });
                });

            modelBuilder.Entity("SpinnersCapstone.Models.UserProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("IdentityUserId")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("IdentityUserId");

                    b.ToTable("UserProfiles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "101 Main Street",
                            FirstName = "Admina",
                            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            LastName = "Strator"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Order", b =>
                {
                    b.HasOne("SpinnersCapstone.Models.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Record", b =>
                {
                    b.HasOne("SpinnersCapstone.Models.Order", "Order")
                        .WithMany("Records")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SpinnersCapstone.Models.RecordWeight", "RecordWeight")
                        .WithMany()
                        .HasForeignKey("RecordWeightId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SpinnersCapstone.Models.SpecialEffect", "SpecialEffect")
                        .WithMany()
                        .HasForeignKey("SpecialEffectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");

                    b.Navigation("RecordWeight");

                    b.Navigation("SpecialEffect");
                });

            modelBuilder.Entity("SpinnersCapstone.Models.RecordColor", b =>
                {
                    b.HasOne("SpinnersCapstone.Models.Color", "Color")
                        .WithMany()
                        .HasForeignKey("ColorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SpinnersCapstone.Models.Record", "Record")
                        .WithMany("RecordColors")
                        .HasForeignKey("RecordId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Color");

                    b.Navigation("Record");
                });

            modelBuilder.Entity("SpinnersCapstone.Models.UserProfile", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", "IdentityUser")
                        .WithMany()
                        .HasForeignKey("IdentityUserId");

                    b.Navigation("IdentityUser");
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Order", b =>
                {
                    b.Navigation("Records");
                });

            modelBuilder.Entity("SpinnersCapstone.Models.Record", b =>
                {
                    b.Navigation("RecordColors");
                });
#pragma warning restore 612, 618
        }
    }
}
