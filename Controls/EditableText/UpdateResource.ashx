<%@ WebHandler Language="C#" Class="UpdateResource" %>

using System;
using System.Web;

public class UpdateResource : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        ResourcesUpdateManager.UpdateResource(context.Request.Params["resource"], context.Request.Params["text"]);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}