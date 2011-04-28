using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Gallery : System.Web.UI.UserControl
{
  public string ThumbnailsFolderName { get; set; }
  public string LoadGalleryJS
  {
    get
    {
      return @" $(document).ready(function() {
                                        ChangeCategory('" + ThumbnailsFolderName + @"')
                                    });
                            ";
    }
  }
  
  protected override void OnPreRender(EventArgs e)
  {
    base.OnPreRender(e);
    ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "galleryJs", "/Controls/Gallery/Gallery.js");
    ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "gallery.mousewheel.js", "/Controls/Gallery/jquery.mousewheel.min.js");
    ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "gallery.css", "<link rel='Stylesheet' type='text/css' href='/Controls/Gallery/Gallery.css' />", false);
    ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "gallery.load.js", LoadGalleryJS, true);
  }
  protected void Page_Load(object sender, EventArgs e)
  {
    imgDisplayedImage.Src = "../../Images/ImgGallery/" + ThumbnailsFolderName + "/1.jpg";
    hdnNumberOfFiles.Value = System.IO.Directory.GetFiles(MapPath(@"..\..\Images\ImgGallery\" + ThumbnailsFolderName)).Length.ToString();
  }
}