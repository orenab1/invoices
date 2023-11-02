public class Invoice
{
    public int Id { get; set; }
    public string Client { get; set; }
    public DateTime Created { get; set; }
    public DateTime Due { get; set; }
    public float Sum { get; set; }
    public InvoiceStatuses Status { get; set; }

}