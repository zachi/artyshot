<%@ WebHandler Language="C#" Class="UrlRewriteHandler" %>

using System;
using System.Web;

public class UrlRewriteHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {

      string sRequestedUrl = context.Request.Url.Query.Replace("?404;", "");
      if (sRequestedUrl == " http://localhost/")
      {
        context.Response.Redirect(" http://localhost/Arti-Shot/Pages/main.aspx");
        return;
      }
      
      if (!sRequestedUrl.ToLower().Contains("arti-shot".ToLower()))
      {
        context.Response.Redirect(sRequestedUrl.Replace("localhost", "localhost/Arti-Shot"));
        return;
      }

      if (sRequestedUrl == " http://localhost/")
      {
        context.Response.Redirect(" http://localhost/Arti-Shot/Pages/main.aspx");
        return;
      }
      if (sRequestedUrl == "http://localhost/Arti-Shot/DayFlowSelection/Modest")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Pages/DayFlowModest.aspx");
        return;
      }
      if (sRequestedUrl == "http://localhost/Arti-Shot/DayFlowSelection/Modest")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Pages/DayFlowModest.aspx");
        return;
      }
      if (sRequestedUrl == "http://localhost/Arti-Shot/DayFlowSelection/Common")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Pages/DayFlowCommon.aspx");
        return;
      }
      if (sRequestedUrl == "http://localhost/Controls/Gallery/Gallery.css")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Controls/Gallery/Gallery.css");
        return;
      }
      if (sRequestedUrl == "http://localhost/StyleSheet/StyleSheet.css")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/StyleSheet/StyleSheet.css");
        return;
      }
      if (sRequestedUrl == "http://localhost/Arti-Shot/Controls/Gallery/Gallery.css")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Controls/Gallery/Gallery.css");
        return;
      }
      if (sRequestedUrl == "http://localhost/Javascript/jquery-1.5.1.min.js")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Javascript/jquery-1.5.1.min.js");
        return;
      }
      if (sRequestedUrl == "http://localhost/javascript/artyshot.js")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Javascript/artyshot.js");
        return;
      }
                            
      if (sRequestedUrl == "http://localhost/Javascript/jquery.dialog/smoothness/jquery-ui-1.8.11.custom.css")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Javascript/jquery.dialog/smoothness/jquery-ui-1.8.11.custom.css");
        return;
      }

      if (sRequestedUrl == "http://localhost/Javascript/jquery.dialog/jquery-ui-1.8.11.custom.min.js")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Javascript/jquery.dialog/jquery-ui-1.8.11.custom.min.js");
        return;
      }
      if (sRequestedUrl == "http://localhost/Images/logo_black_small.png")
      {
        context.Response.Redirect("http://localhost/Arti-Shot/Images/logo_black_small.png");
        return;
      }
      if (sRequestedUrl == "")
      {
        context.Response.Redirect("");
        return;
      }
      if (sRequestedUrl == "")
      {
        context.Response.Redirect("");
        return;
      }
    
    
      if (sRequestedUrl.Contains(".aspx"))
      {
       throw new Exception("url is not corrent: " + sRequestedUrl);
      }
      else
        context.Response.Redirect(sRequestedUrl.Insert(sRequestedUrl.LastIndexOf("/"), "/Pages") + ".aspx");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}