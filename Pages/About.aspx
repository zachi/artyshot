<%@ Page Title="אודותינו - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="About.aspx.cs" Inherits="About"  ValidateRequest="false" %>
<%@ Register Src="~/Controls/EditableText/EditableText.ascx" TagPrefix="Custom" TagName="EditableText"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div class="TextContainer" style="margin-top:80px; width:570px;">

<Custom:EditableText Height="530" Width="570" ID="About1" runat="server" Resource="About" />


</div>
</asp:Content>

