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
    public class DeliveryBoysController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public DeliveryBoysController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/DeliveryBoys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeliveryBoy>>> GetDeliveryBoys()
        {
            return await _context.DeliveryBoys.ToListAsync();
        }

        // GET: api/DeliveryBoys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeliveryBoy>> GetDeliveryBoy(int id)
        {
            var deliveryBoy = await _context.DeliveryBoys.FindAsync(id);

            if (deliveryBoy == null)
            {
                return NotFound();
            }

            return deliveryBoy;
        }

        // PUT: api/DeliveryBoys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeliveryBoy(int id, DeliveryBoy deliveryBoy)
        {
            if (id != deliveryBoy.Id)
            {
                return BadRequest();
            }

            _context.Entry(deliveryBoy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliveryBoyExists(id))
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

        // POST: api/DeliveryBoys
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DeliveryBoy>> PostDeliveryBoy(DeliveryBoy deliveryBoy)
        {
            _context.DeliveryBoys.Add(deliveryBoy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeliveryBoy", new { id = deliveryBoy.Id }, deliveryBoy);
        }

        // DELETE: api/DeliveryBoys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeliveryBoy(int id)
        {
            var deliveryBoy = await _context.DeliveryBoys.FindAsync(id);
            if (deliveryBoy == null)
            {
                return NotFound();
            }

            _context.DeliveryBoys.Remove(deliveryBoy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeliveryBoyExists(int id)
        {
            return _context.DeliveryBoys.Any(e => e.Id == id);
        }
    }
}
