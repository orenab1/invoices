
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DbSet<Invoice> Invoices { get; set; }
    public DataContext(DbContextOptions options) : base(options)
    {
    }
}