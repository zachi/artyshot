<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div style="width:320px; margin:0 auto; margin-top:150px;direction:ltr;">
<asp:Login ID="Login1" runat="server"   TitleTextStyle-Font-Bold="true" 
    LabelStyle-HorizontalAlign="Left" BackColor="" BorderColor="#CECECE" 
    BorderStyle="Solid" BorderWidth="1px" Font-Names="Verdana" Font-Size="10pt" 
    Height="155px" Width="312px">
<LabelStyle HorizontalAlign="Left"></LabelStyle>

<TitleTextStyle Font-Bold="True" BackColor="#6B696B" ForeColor="#FFFFFF"></TitleTextStyle>
</asp:Login>
<div style="width:80px; margin:0 auto; ">
<asp:Button ID="Logoff" Text="Sign Out" runat="server" OnClick="Logoff_Click" />
</div>
</div>
</asp:Content>

