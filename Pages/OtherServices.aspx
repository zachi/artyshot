<%@ Page Title="שירותים נוספים - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" ValidateRequest="false"  CodeFile="OtherServices.aspx.cs" Inherits="OtherServices" %>
<%@ Register Src="~/Controls/EditableText/EditableText.ascx" TagPrefix="Custom" TagName="EditableText"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="TextContainer TextContainerFrame" >
        <div style="margin: 0 auto; width: 270px; margin-top:15px;">
            <Custom:EditableText ID="ETAbout" runat="server" Height="250" Resource="OtherServices" />
        </div>
    </div>
</asp:Content>
