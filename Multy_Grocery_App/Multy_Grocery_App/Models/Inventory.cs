using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Multy_Grocery_App.Models
{
    public class Inventory
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Code { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Type { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Price { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Quantity { get; set; }
    }
}
