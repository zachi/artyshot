using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
      if (User.Identity.IsAuthenticated)
      {
        Login1.Visible = false;
        Logoff.Visible = true;
      }
      else
      {
        Login1.Visible = true;
        Logoff.Visible = false;
       }
    }

    protected void Logoff_Click(object sender, EventArgs e)
    {
      FormsAuthentication.SignOut();
    }
}