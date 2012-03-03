<%@ Page Title="שירותים נוספים - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" ValidateRequest="false"  CodeFile="FacebookLinks.aspx.cs" Inherits="OtherServices" %>
<%@ Register Src="~/Controls/EditableText/EditableText.ascx" TagPrefix="Custom" TagName="EditableText"  %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    
    <div id="title" class="facebook-links" ></div>
    <div id="links">
     <a id="arteshot" alt="arteshot - סרטי תדמית לעסקים"       title="arteshot - סרטי תדמית לעסקים" class="facebook-links" href="http://www.facebook.com/arteshot" target="_blank"  ></a>
     <a id="artyshot" alt="רגעים מנצחים"  title="רגעים מנצחים" class="facebook-links" href="http://www.facebook.com/artyshot" target="_blank" ></a>
     <a id="pnima"    alt="פנימה - הפקת אלבומים וסרטים" title="פנימה - הפקת אלבומים וסרטים" class="facebook-links" href="http://www.facebook.com/pnima.post" target="_blank" ></a>
    </div>
</asp:Content>
