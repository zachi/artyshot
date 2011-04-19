<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EditableText.old.ascx.cs"
  Inherits="EditableText" %>
<asp:PlaceHolder ID="plcEditArea" runat="server">
<%--
  <style type="text/css">
    .txtText
    {
      display:inline-block;
      
    }
    .btnEdit
    {
      position: absolute;
      top:-8px;
      right:0;
    }
    .btnSave
    {
      position: absolute;
      top:-13px;
      right:4px;
    }
  </style>--%>
  <span id="<%= GetUniqueId() %>"></span>
  <span style="position:relative;display:inline-block;">
  
  <asp:ImageButton ID="btnSave" ImageUrl="~/Images/icon_save.png" CssClass="btnSave" OnClick="btnSave_Click" runat="server" />
  <asp:TextBox ID="txtText" runat="server" CssClass="txtText" ></asp:TextBox>
  
  <asp:ImageButton ID="btnEdit" CssClass="btnEdit" ImageUrl="~/Images/icon_edit.png" OnClick="btnEdit_Click" runat="server" />
  <asp:Label ID="lblText" runat="server"></asp:Label>
  <asp:PlaceHolder ID="plcEditClickScript" runat="server">
    <script type='text/javascript'>
      var CurrBox = jQuery('#<%=GetUniqueId() %>');
      CurrBox.parents('a').each(function () {
        jQuery(this).removeAttr('href');
      })
      var width = CurrBox.parents().filter(function () { return $(this).css('width') != 'auto'; }).filter(':first').css('width');
      if (width.length != 0) {
        width = parseInt(width.replace('px', ''));
        jQuery('.txtText').css('width', width - 10);
      }
 
    </script>
  </asp:PlaceHolder>
  </span>
</asp:PlaceHolder>
<asp:Literal ID="ltrlText" runat="server"></asp:Literal>


