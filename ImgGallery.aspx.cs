using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ImgGallery : System.Web.UI.Page
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
    protected override void OnPreRender(EventArgs e)
    {
        base.OnPreRender(e);

        string sLoadGalleryJS = @" $(document).ready(function() {
                                        ChangeCategory('" + sCategory + @"')
                                    });
                            ";
        ScriptManager.RegisterClientScriptBlock(this, typeof(ImgGallery), "key", sLoadGalleryJS, true);
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        hdnNumberOfFiles.Value = System.IO.Directory.GetFiles(MapPath(@"Images\ImgGallery\" + sCategory)).Length.ToString();
        imgDisplayedImage.Src = "Images/ImgGallery/" + sCategory + "/1.jpg";
    }
}