<%@ Page Language="C#" AutoEventWireup="true"%>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {

        DateTime currentdate = DateTime.Now;
        Response.ContentType = "text/event-stream";
        while (startDate.AddMinutes(1) > DateTime.Now)
        {
            Response.Write(string.Format("data: {0}\n\n", DateTime.Now.ToString()));
            Response.Flush();
            System.Threading.Thread.Sleep(1000);
        }
    }
</script>