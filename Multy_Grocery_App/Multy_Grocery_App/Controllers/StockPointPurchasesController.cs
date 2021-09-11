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
    public class StockPointPurchasesController : ControllerBase
    {
        private readonly UserDetailsContext _context;

        public StockPointPurchasesController(UserDetailsContext context)
        {
            _context = context;
        }

        // GET: api/StockPointPurchases
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StockPointPurchase>>> GetStockPointPurchase()
        {
            return await _context.StockPointPurchase.ToListAsync();
        }

        // GET: api/StockPointPurchases/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StockPointPurchase>> GetStockPointPurchase(int id)
        {
            var stockPointPurchase = await _context.StockPointPurchase.FindAsync(id);

            if (stockPointPurchase == null)
            {
                return NotFound();
            }

            return stockPointPurchase;
        }

        // PUT: api/StockPointPurchases/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStockPointPurchase(int id, StockPointPurchase stockPointPurchase)
        {
            if (id != stockPointPurchase.Id)
            {
                return BadRequest();
            }

            _context.Entry(stockPointPurchase).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StockPointPurchaseExists(id))
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

        // POST: api/StockPointPurchases
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StockPointPurchase>> PostStockPointPurchase(StockPointPurchase stockPointPurchase)
        {
            _context.StockPointPurchase.Add(stockPointPurchase);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStockPointPurchase", new { id = stockPointPurchase.Id }, stockPointPurchase);
        }

        // DELETE: api/StockPointPurchases/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStockPointPurchase(int id)
        {
            var stockPointPurchase = await _context.StockPointPurchase.FindAsync(id);
            if (stockPointPurchase == null)
            {
                return NotFound();
            }

            _context.StockPointPurchase.Remove(stockPointPurchase);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StockPointPurchaseExists(int id)
        {
            return _context.StockPointPurchase.Any(e => e.Id == id);
        }
    }
}
