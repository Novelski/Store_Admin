using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Multy_Grocery_App.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Item_Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Item_Code { get; set; }
      
        [Column(TypeName = "nvarchar(20)")]
        public string Price { get; set; }
    }
}
