using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Multy_Grocery_App.Models;

namespace Multy_Grocery_App.Models
{
    public class UserDetailsContext : DbContext
    {
        public UserDetailsContext(DbContextOptions<UserDetailsContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }

        public DbSet<Orders> Orders { get; set; }

        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<DeliveryBoy> DeliveryBoys { get; set; }
        public DbSet<Customers> customers { get; set; }
        public DbSet<NewOrder> newOrders { get; set; }
        public DbSet<Stores> stores { get; set; }
        public DbSet<Coupons> coupons { get; set; }
        public DbSet<Multy_Grocery_App.Models.Item> Item { get; set; }
        public DbSet<Multy_Grocery_App.Models.StockPointPurchase> StockPointPurchase { get; set; }
    }
}
