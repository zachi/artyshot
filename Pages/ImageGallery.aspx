<%@ Page Title="גלרית תמונות - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="ImageGallery.aspx.cs" Inherits="ImageGallery" %>
<%@ Register TagPrefix="Custom" TagName="Gallery" Src="~/Controls/Gallery/Gallery.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
  <Custom:Gallery ID="gallery" runat="server" />
</asp:Content>

