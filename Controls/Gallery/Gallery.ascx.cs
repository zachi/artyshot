using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Gallery : System.Web.UI.UserControl
{
  public string ThumbnailsFolderName { get; set; }
  protected override void OnPreRender(EventArgs e)
  {
    base.OnPreRender(e);

    string sLoadGalleryJS = @" $(document).ready(function() {
                                        ChangeCategory('" + ThumbnailsFolderName + @"')
                                    });
                            ";
    //ScriptManager.RegisterClientScriptInclude(this, typeof(Gallery), "galleryJs", TemplateSourceDirectory + "/Gallery.js");
    //ScriptManager.RegisterClientScriptBlock(this, typeof(Gallery), "key", sLoadGalleryJS, true);
  }
  protected void Page_Load(object sender, EventArgs e)
  {
    imgDisplayedImage.Src = "../../Images/ImgGallery/" + ThumbnailsFolderName + "/1.jpg";
    hdnNumberOfFiles.Value = System.IO.Directory.GetFiles(MapPath(@"..\..\Images\ImgGallery\" + ThumbnailsFolderName)).Length.ToString();
  }
}