<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div style="width:250px; margin:0 auto; margin-top:150px;direction:ltr;">
<asp:Login ID="Login1" runat="server"   TitleTextStyle-Font-Bold="true" LabelStyle-HorizontalAlign="Left">
</asp:Login>
<asp:Button ID="Logoff" Text="Sign Out" runat="server" OnClick="Logoff_Click" />
</div>
</asp:Content>

