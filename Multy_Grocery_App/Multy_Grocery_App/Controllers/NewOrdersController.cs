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
    public class NewOrdersController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public NewOrdersController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/NewOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewOrder>>> GetnewOrders()
        {
            return await _context.newOrders.ToListAsync();
        }

        // GET: api/NewOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NewOrder>> GetNewOrder(int id)
        {
            var newOrder = await _context.newOrders.FindAsync(id);

            if (newOrder == null)
            {
                return NotFound();
            }

            return newOrder;
        }

        // PUT: api/NewOrders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNewOrder(int id, NewOrder newOrder)
        {
            if (id != newOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(newOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewOrderExists(id))
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

        // POST: api/NewOrders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NewOrder>> PostNewOrder(NewOrder newOrder)
        {
            _context.newOrders.Add(newOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNewOrder", new { id = newOrder.Id }, newOrder);
        }

        // DELETE: api/NewOrders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNewOrder(int id)
        {
            var newOrder = await _context.newOrders.FindAsync(id);
            if (newOrder == null)
            {
                return NotFound();
            }

            _context.newOrders.Remove(newOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NewOrderExists(int id)
        {
            return _context.newOrders.Any(e => e.Id == id);
        }
    }
}
