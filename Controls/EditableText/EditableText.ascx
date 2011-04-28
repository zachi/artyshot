<%@ Control Language="C#" AutoEventWireup="true" CodeFile="EditableText.ascx.cs"
  Inherits="EditableText" %>
<asp:PlaceHolder ID="plcEditArea" runat="server"><span style="position: relative; display: inline-block;">
  <link rel="stylesheet" href="/Controls/EditableText/EditableText.css" type="text/css" />
  <img class="btnEdit" src="/Images/icon_edit.png" />
  <asp:Label ID="lblText" CssClass="lblText" runat="server"></asp:Label>
  <input type="hidden" id="hdnHeight" runat="server" class="hdnHeight" />
  <input type="hidden" id="hdnWidth" runat="server" class="hdnWidth" />
  <input type="hidden" id="hdnReourseName" runat="server" class="hdnResourceName" />
</span></asp:PlaceHolder>
<asp:Literal ID="ltrlText" runat="server"></asp:Literal>
