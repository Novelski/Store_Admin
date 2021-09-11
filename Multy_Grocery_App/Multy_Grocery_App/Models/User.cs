using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Multy_Grocery_App.Models
{
    public class User
    {
     [Key]
       public int Id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
    public string Name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string Mailid { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string Password { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string MobileNumber { get; set; }

    }
}
