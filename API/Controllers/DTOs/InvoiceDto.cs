public class InvoiceDto
{
    public int Id { get; set; }
    public string Client { get; set; }
    public DateTime Due { get; set; }
    public float Sum { get; set; }
    public InvoiceStatuses InvoiceStatus { get; set; }

}