using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Security;

/// <summary>
/// Summary description for ResourcesUpdateManager
/// </summary>
public static class ResourcesUpdateManager
{
	static ResourcesUpdateManager()
	{
		//
		// TODO: Add constructor logic here
		//
	}

  public static void UpdateResource(string Resource, string Value)
  {
    XmlDocument loResource = new XmlDocument();
    loResource.Load(HttpContext.Current.Server.MapPath("../../App_GlobalResources/Resource.resx").Replace("Controls", ""));

    XmlNode loRoot = loResource.SelectSingleNode("root/data[@name='" + Resource + "']/value");

    if (loRoot != null)
    {
      loRoot.InnerXml = Escape(Value);
      loResource.Save(HttpContext.Current.Server.MapPath("../../App_GlobalResources/Resource.resx").Replace("Controls", ""));
    }
  }
  private static string Escape(string value)
  {
    return SecurityElement.Escape(value);//.Replace("&amp;", "&");

  }
}