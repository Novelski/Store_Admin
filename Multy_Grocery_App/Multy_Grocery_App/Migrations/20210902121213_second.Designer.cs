﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Multy_Grocery_App.Models;

namespace Multy_Grocery_App.Migrations
{
    [DbContext(typeof(UserDetailsContext))]
    [Migration("20210902121213_second")]
    partial class second
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Multy_Grocery_App.Models.Customers", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Mailid")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("MobileNumber")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("customers");
                });

            modelBuilder.Entity("Multy_Grocery_App.Models.DeliveryBoy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Mailid")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("MobileNumber")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("DeliveryBoys");
                });

            modelBuilder.Entity("Multy_Grocery_App.Models.Inventory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Price")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Quantity")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Inventories");
                });

            modelBuilder.Entity("Multy_Grocery_App.Models.NewOrder", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Quantity")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("newOrders");
                });

            modelBuilder.Entity("Multy_Grocery_App.Models.Orders", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Amount")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Items")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Multy_Grocery_App.Models.Stores", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("KYC")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Renewal")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("stores");
                });

            modelBuilder.Entity("Multy_Grocery_App.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Mailid")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("MobileNumber")
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
