using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Spinners_Capstone.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    SecurityStamp = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Colors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    ImageUrl = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Colors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RecordWeights",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Weight = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecordWeights", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SpecialEffects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    ImageUrl = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpecialEffects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    ProviderKey = table.Column<string>(type: "text", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    RoleId = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    IdentityUserId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserProfiles_AspNetUsers_IdentityUserId",
                        column: x => x.IdentityUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    OrderDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    UserProfileId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_UserProfiles_UserProfileId",
                        column: x => x.UserProfileId,
                        principalTable: "UserProfiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Records",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RecordWeightId = table.Column<int>(type: "integer", nullable: false),
                    SpecialEffectId = table.Column<int>(type: "integer", nullable: false),
                    OrderId = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Records", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Records_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Records_RecordWeights_RecordWeightId",
                        column: x => x.RecordWeightId,
                        principalTable: "RecordWeights",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Records_SpecialEffects_SpecialEffectId",
                        column: x => x.SpecialEffectId,
                        principalTable: "SpecialEffects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RecordColors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ColorId = table.Column<int>(type: "integer", nullable: false),
                    RecordId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecordColors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RecordColors_Colors_ColorId",
                        column: x => x.ColorId,
                        principalTable: "Colors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RecordColors_Records_RecordId",
                        column: x => x.RecordId,
                        principalTable: "Records",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "96dc7c9d-3782-4d53-8636-0a533fbb21c0", "Admin", "admin" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", 0, "f100a958-d1b1-4de7-b78d-ca3bdfcfc206", "admina@strator.comx", false, false, null, null, null, "AQAAAAEAACcQAAAAEBygUopE6Mvpz+JdCg/uikyg1LuwA2e9fM+rjS2+q6fhigDNNfoWU+bAL9Nez/jh7w==", null, false, "928335e1-7c85-446e-a11d-5f31dbb7bbc6", false, "Administrator" });

            migrationBuilder.InsertData(
                table: "Colors",
                columns: new[] { "Id", "ImageUrl", "Name" },
                values: new object[,]
                {
                    { 1, "data:image/jpeg;base64,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", "Red" },
                    { 2, "", "Green" },
                    { 3, "", "Blue" },
                    { 4, "", "Orange" },
                    { 5, "", "Purple" },
                    { 6, "", "Clear" },
                    { 7, "", "Yellow" },
                    { 8, "", "Black" }
                });

            migrationBuilder.InsertData(
                table: "RecordWeights",
                columns: new[] { "Id", "Price", "Weight" },
                values: new object[,]
                {
                    { 1, 50m, 130 },
                    { 2, 75m, 180 }
                });

            migrationBuilder.InsertData(
                table: "SpecialEffects",
                columns: new[] { "Id", "ImageUrl", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "", "BiColor", 50m },
                    { 2, "", "Splatter", 100m },
                    { 3, "", "Swirl", 75m }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "c3aaeb97-d2ba-4a53-a521-4eea61e59b35", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f" });

            migrationBuilder.InsertData(
                table: "UserProfiles",
                columns: new[] { "Id", "Address", "FirstName", "IdentityUserId", "LastName" },
                values: new object[] { 1, "101 Main Street", "Admina", "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f", "Strator" });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "OrderDate", "UserProfileId" },
                values: new object[] { 1, new DateTime(2023, 10, 24, 13, 11, 55, 358, DateTimeKind.Local).AddTicks(482), 1 });

            migrationBuilder.InsertData(
                table: "Records",
                columns: new[] { "Id", "OrderId", "Quantity", "RecordWeightId", "SpecialEffectId" },
                values: new object[,]
                {
                    { 1, 1, 50, 1, 1 },
                    { 2, 1, 100, 1, 2 }
                });

            migrationBuilder.InsertData(
                table: "RecordColors",
                columns: new[] { "Id", "ColorId", "RecordId" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 2, 2 },
                    { 3, 3, 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserProfileId",
                table: "Orders",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_RecordColors_ColorId",
                table: "RecordColors",
                column: "ColorId");

            migrationBuilder.CreateIndex(
                name: "IX_RecordColors_RecordId",
                table: "RecordColors",
                column: "RecordId");

            migrationBuilder.CreateIndex(
                name: "IX_Records_OrderId",
                table: "Records",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Records_RecordWeightId",
                table: "Records",
                column: "RecordWeightId");

            migrationBuilder.CreateIndex(
                name: "IX_Records_SpecialEffectId",
                table: "Records",
                column: "SpecialEffectId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_IdentityUserId",
                table: "UserProfiles",
                column: "IdentityUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "RecordColors");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Colors");

            migrationBuilder.DropTable(
                name: "Records");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "RecordWeights");

            migrationBuilder.DropTable(
                name: "SpecialEffects");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
