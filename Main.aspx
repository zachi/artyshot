<%@ Page Title="רגעים מנצחים - צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true"
    CodeFile="Main.aspx.cs" Inherits="Main" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript" src="Javascript/jquery.cycle/jquery.cycle.min.js"></script>
    <script type="text/javascript">
         jQuery(document).ready(function () {
            jQuery('.CycledImageContainer').cycle({
                fx: 'fade',
                speed: 2500
            });
        });
    </script>

    <div class="CycledImageContainer" >
        <img src="Images/HomePage/new1.jpg" />
        <img src="Images/HomePage/new2.jpg" />
        <img src="Images/HomePage/new3.jpg" />
        <img src="Images/HomePage/new4.jpg" />
        <img src="Images/HomePage/new5.jpg" />
        <img src="Images/HomePage/new6.jpg" />
    </div>
</asp:Content>
