using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


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
  public int? Width { get; set; }
  protected override void OnPreRender(EventArgs e)
  {
    base.OnPreRender(e);
    
    if(!Readonly)
      ScriptManager.RegisterClientScriptInclude(this, typeof(EditableText), "EditableText.js", "/Controls/EditableText/EditableText.js");
    
  }
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

  private void InitEditMode()
  {

    lblText.Text = GetGlobalResourceObject("Resource", Resource) as string;
    hdnHeight.Value = Height.GetValueOrDefault(20).ToString();
    hdnWidth.Value = Width.GetValueOrDefault(350).ToString();
    hdnReourseName.Value = Resource;

  }

  private void InitReadonlyMode()
  {
    ltrlText.Text = GetGlobalResourceObject("Resource", Resource) as string;
  }

  private void HideEditElements()
  {
    plcEditArea.Visible = false;
  }

}