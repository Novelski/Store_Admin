using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Multy_Grocery_App.Models
{
    public class Orders
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string OrderId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Items { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Amount { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Address { get; set; }
    }
}
