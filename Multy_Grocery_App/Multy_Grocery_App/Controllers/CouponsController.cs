using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Multy_Grocery_App.Models;

namespace Multy_Grocery_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponsController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public CouponsController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/Coupons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Coupons>>> Getcoupons()
        {
            return await _context.coupons.ToListAsync();
        }

        // GET: api/Coupons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Coupons>> GetCoupons(int id)
        {
            var coupons = await _context.coupons.FindAsync(id);

            if (coupons == null)
            {
                return NotFound();
            }

            return coupons;
        }

        // PUT: api/Coupons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCoupons(int id, Coupons coupons)
        {
            if (id != coupons.Id)
            {
                return BadRequest();
            }

            _context.Entry(coupons).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CouponsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Coupons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Coupons>> PostCoupons(Coupons coupons)
        {
            _context.coupons.Add(coupons);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCoupons", new { id = coupons.Id }, coupons);
        }

        // DELETE: api/Coupons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCoupons(int id)
        {
            var coupons = await _context.coupons.FindAsync(id);
            if (coupons == null)
            {
                return NotFound();
            }

            _context.coupons.Remove(coupons);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CouponsExists(int id)
        {
            return _context.coupons.Any(e => e.Id == id);
        }
    }
}
