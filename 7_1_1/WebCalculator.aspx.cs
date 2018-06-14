using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class WebCalculator : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var number1 = double.Parse(Request.QueryString["number1"]);
        var number2 = double.Parse(Request.QueryString["number2"]);

        Response.Write(number1 + number2);
    }
}