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
                return sCategory1.ToLower();
            sCategory1 = Request["Category"];
            if (!string.IsNullOrEmpty(sCategory1))
            {
                Session["Category"] = sCategory1;
            }
            else
            {
                sCategory1 = "common";
            }
            return sCategory1.ToLower();
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {

      plcCommon.Visible = sCategory == "common";
      plcModest.Visible = sCategory == "modest";

    }
    
//    public string LoadGalleryJS
//    {
//      get
//      {
//        int nNumberOfThumbnails = System.IO.Directory.GetFiles(MapPath(@"..\Images\ImgGallery\" + sCategory)).Length;
//        return @" $(document).ready(function() {
//                                        $('.ImageGallery').stoa({
//                                                                    'numberOfThumbnails': " + nNumberOfThumbnails + @",
//                                                                    'thumbnailsFolderName': '" + sCategory + @"'
//                                                                   });
//                                    });
//                            ";
//      }
      
//    }

//    protected override void OnPreRender(EventArgs e)
//    {
//      base.OnPreRender(e);

//      //ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "jquery.ui.core.min.js", "/Controls/Gallery/jquery.ui.core.min.js");
//      ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "jquery.ui.widget.min.js", "/Controls/Gallery/jquery.ui.widget.min.js");
//      ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "galleryJs", "/Controls/Gallery/Gallery.plugin.js");
//      ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "gallery.mousewheel.js", "/Controls/Gallery/jquery.mousewheel.min.js");
//      ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "gallery.css", "<link rel='Stylesheet' type='text/css' href='/Controls/Gallery/Gallery.css' />", false);
//      ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "gallery.load.js", LoadGalleryJS, true);
//    }

    public string LoadGalleryJS
    {
      get
      {

        return @"
                  $(document).ready(function () {
                    $('div#turn-me-into-stoa-" + sCategory + @"').stoa({ direction: 'rtl' });
                  });           
               ";
      }

    }

    protected override void OnPreRender(EventArgs e)
    {
      base.OnPreRender(e);

      //ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "jquery.min.js", "/Javascript/jquery-1.5.1.min.js");
      ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "jquery.ui.widget.min.js", "/stoa/stoa-needs-me/jquery.ui.widget.min.js");
      ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "stoa.plugin.js", "/stoa/stoa.plugin.js");
      ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "gallery.mousewheel.js", "/stoa/stoa-needs-me/jquery.mousewheel.min.js");
      ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "stoa.css", "<link rel='Stylesheet' type='text/css' href='/stoa/stoa.css' />", false);
      ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "stoa.rtl.css", "<link rel='Stylesheet' type='text/css' href='/stoa/stoa.rtl.css' />", false);
      ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "gallery.load.js", LoadGalleryJS, true);
    }
}