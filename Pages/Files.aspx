<%@ Page Title="קבצים להורדה - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Files.aspx.cs" Inherits="Files" %>
<%@ Register Src="~/Controls/EditableText/EditableText.ascx" TagPrefix="Custom" TagName="EditableText"  %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div class="TextContainer TextContainerFrame" >
<div style="margin: 0 auto; width: 200px; padding-top:55px;line-height:25px;">
<span >
<Custom:EditableText runat="server" Resource="AlbumsOrderForm" /><a class="FadeOnHover" target="_blank" href="/Files/albums_reservation.pdf" >הורד</a><br />
<Custom:EditableText runat="server" Resource="PhotogrphyContractForm" /><a class="FadeOnHover" target="_blank" href="/Files/contract.pdf" >הורד</a><br />
<Custom:EditableText runat="server" Resource="VideoEditingForm" /><a class="FadeOnHover" target="_blank" href="/Files/video_editing.pdf" >הורד</a><br />
</span>
</div>
</div>
</asp:Content>

