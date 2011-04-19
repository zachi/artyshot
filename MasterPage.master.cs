﻿using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;

public partial class MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Request.Url.AbsoluteUri.Contains("arty-shot.com"))
        {
          Response.Status = "301 Moved Permanently";
          Response.AddHeader("Location", Request.Url.AbsoluteUri.Replace("arty-shot.com", "artyshot.co.il"));
          return;
        }
        string sPageName = Request.Url.Segments[Request.Url.Segments.Length - 1];
        HtmlControl c = (HtmlControl)FindControl("hrf" + sPageName.Replace(".aspx", ""));
        if (c != null)
            c.Attributes["class"] = c.Attributes["class"].Replace("FadeOnHover", "Black");
    }
    protected override void OnPreRender(EventArgs e)
    {
      base.OnPreRender(e);
      //ScriptManager.RegisterClientScriptInclude(this, typeof(EditableText), "AllowEditableImage.js", "/Controls/EditableImage/EditableImage.js");
      ScriptManager.RegisterClientScriptBlock(this, typeof(EditableText), "AllowEditableImage.css", "<link rel='stylesheet' href='/Controls/EditableImage/EditableImage.css' type='text/css' />", false);

   //    <script type="text/javascript" src="/Controls/EditableImage/EditableImage.js"></script>
   //
    }
}
