using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class exotic_china : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var slide = int.Parse(Request.QueryString["slide"]);

        var responseStr = string.Empty;

        switch (slide)
	    {
		    case 1:
               responseStr = "<figure>" +
    "<h2> Рисовая терраса </h2>" +
       "<img src = \"http://professorweb.ru/downloads/XMLHttpRequest_Sample/rice_terrace.jpg\">" + 
       "</figure>";
               break;

		    case 2:
               responseStr = @"<figure>
    <h2> Жемчужная башня </h2>
       <img src = ""http://professorweb.ru/downloads/XMLHttpRequest_Sample/oriental_pearl_tower.jpg"">
        </figure> ";
               break;

		    case 3:
                responseStr = @"<figure>
    <h2> Насыщенная улица </h2>
       <img src = ""http://professorweb.ru/downloads/XMLHttpRequest_Sample/percival_street.jpg"" >
        </figure> ";
               break;

		    case 4:
                responseStr = @"<figure>
    <h2> Обычная деревня </h2>
       <img src = ""http://professorweb.ru/downloads/XMLHttpRequest_Sample/traditional_village.jpg"">
        </figure>";
                break;

		    case 5:
                responseStr = @"<figure>
    <h2> Дерево желаний </h2>
       <img src = ""http://professorweb.ru/downloads/XMLHttpRequest_Sample/wishing_tree.jpg"">
        </figure> ";
               break;

            default:
                responseStr = "Слайд не найден";
                break;
        }


        Response.Write(responseStr);
    }
}