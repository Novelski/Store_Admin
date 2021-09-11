using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Multy_Grocery_App.Models
{
    public class Stores
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Location { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string PhoneNumber { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string KYC { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Status { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Renewal { get; set; }
      
    }
}
