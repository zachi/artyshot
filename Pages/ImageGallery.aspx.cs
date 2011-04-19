using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ImageGallery : System.Web.UI.Page
{
    public string sCategory
    {
        get
        {
            string sCategory1 = Session["Category"] as string;
            if (!string.IsNullOrEmpty(sCategory1))
                return sCategory1;
            sCategory1 = Request["Category"];
            if (!string.IsNullOrEmpty(sCategory1))
            {
                Session["Category"] = sCategory1;
            }
            else
            {
                sCategory1 = "Common";
            }
            return sCategory1;
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
      gallery.ThumbnailsFolderName = sCategory;
    }
}