using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Security;

public partial class EditableText : System.Web.UI.UserControl
{
  public string Resource { get; set; }
  private static bool Readonly
  {
    get
    {
      return !HttpContext.Current.User.Identity.IsAuthenticated;
    }
  }
  
 
  public int? Height { get; set; }

  protected void Page_Load(object sender, EventArgs e)
  {
    if (!IsPostBack)
    {
      if (Readonly)
      {
        HideEditElements();
        InitReadonlyMode();
        return;
      }
      InitEditMode();
    }
  }

  protected string GetUniqueId()
  {
    return ID;
  }

  private void InitEditMode()
  {
    if (Height.HasValue)
    {
      txtText.Height = Height.Value;
      txtText.TextMode = TextBoxMode.MultiLine;
    }
    lblText.Text = txtText.Text = GetGlobalResourceObject("Resource", Resource) as string;
    btnEdit.Visible = lblText.Visible = true;
    btnSave.Visible = txtText.Visible = plcEditClickScript.Visible = false;
  }

  private void InitReadonlyMode()
  {
    ltrlText.Text = GetGlobalResourceObject("Resource", Resource) as string;
  }

  private void HideEditElements()
  {
    
    plcEditArea.Visible = false;
  }

  private void UpdateResource(string Resource, string Value)
  {
    XmlDocument loResource = new XmlDocument();
    loResource.Load(Server.MapPath("App_GlobalResources/Resource.resx"));

    XmlNode loRoot = loResource.SelectSingleNode("root/data[@name='" + Resource + "']/value");

    if (loRoot != null)
    {
      loRoot.InnerXml = Escape(Value);
      loResource.Save(Server.MapPath("App_GlobalResources/Resource.resx"));
    }
  }

  private string Escape(string value)
  {
    return SecurityElement.Escape(value);//.Replace("&amp;", "&");

  }

  protected void btnSave_Click(object sender, ImageClickEventArgs e)
  {
    btnEdit.Visible = lblText.Visible = true;
    btnSave.Visible = txtText.Visible = plcEditClickScript.Visible = false;
    UpdateResource(Resource, txtText.Text);
    lblText.Text = txtText.Text;
  }

  protected void btnEdit_Click(object sender, ImageClickEventArgs e)
  {
    btnEdit.Visible = lblText.Visible = false;
    btnSave.Visible = txtText.Visible = plcEditClickScript.Visible =true;
  }

}