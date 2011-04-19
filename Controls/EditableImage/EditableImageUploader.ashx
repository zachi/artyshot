<%@ WebHandler Language="C#" Class="EditableImageUploader" %>

using System;
using System.Web;

public class EditableImageUploader : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
      HttpPostedFile UploadedFile = context.Request.Files.Get(0);
      string Path = ConfigData.VirtualDirectorySiteName + context.Request.Params["image-path"];
      UploadedFile.SaveAs(context.Server.MapPath(( Path)).Replace("Controls\\EditableImage", ""));
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}