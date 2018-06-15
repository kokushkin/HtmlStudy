<%@ Page Language="C#" AutoEventWireup="true"%>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {        
        Response.ContentType = "text/event-stream";
        Response.CacheControl = "no-cache";

        DateTime serverTime;

        while(true)
        {
            serverTime = DateTime.Now;
            SendMessage(serverTime.Millisecond, string.Format("Новое время: {0}:{1}:{2}", serverTime.Hour, serverTime.Minute, serverTime.Second));
            System.Threading.Thread.Sleep(1000);
        }
    }

    void SendMessage(int id, string message)
    {        
        Response.Write(string.Format("id: {0}\n", id));
        Response.Write(string.Format("data: {0}\n", message));
        Response.Write("\n\n");
        Response.Flush();
    }
</script>