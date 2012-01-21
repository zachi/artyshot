<%@ Page Title="גלרית תמונות - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="ImageGallery.aspx.cs" Inherits="ImageGallery" %>
<%@ Register TagPrefix="Custom" TagName="Gallery" Src="~/Controls/Gallery/Gallery.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
  <asp:PlaceHolder ID="plcCommon" runat="server" Visible="false">
    <div id="turn-me-into-stoa-common"></div>
  </asp:PlaceHolder>
  <asp:PlaceHolder ID="plcModest" runat="server" Visible="false">
    <div id="turn-me-into-stoa-modest"></div>
  </asp:PlaceHolder>
</asp:Content>
