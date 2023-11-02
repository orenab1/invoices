using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.ObjectPool;

[ApiController]
[Route("api/[controller]")]
public class InvoicesController : ControllerBase
{
    private readonly DataContext _context;
    public InvoicesController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoices()
    {
        var invoices = await _context.Invoices.ToListAsync();
        return Ok(invoices);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Invoice>> GetInvoice(int id)
    {
        return await _context.Invoices.FindAsync(id);
    }

    [HttpPut]
    public async Task<ActionResult> UpdateInvoice(Invoice invoice)
    {
        // get invoice by id
        // update fields
        // save
        return NoContent();
    }

    // TO DO: use DTO
    [HttpPost]
    public async Task<ActionResult> CreateInvoice(Invoice invoice)
    {
        // TO DO: use repository
        var result = await _context.Invoices.AddAsync(invoice);
        return NoContent();
    }
}