<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Gallery.ascx.cs" Inherits="Gallery" %>
<link rel="Stylesheet" type="text/css" href="/Controls/Gallery/Gallery.css" />
<script type="text/javascript" src="/Controls/Gallery/Gallery.js" ></script>
<script type="text/javascript" src="/Controls/EditableImage/EditableImage.js"></script>
<link rel="Stylesheet" type="text/css" href="/Controls/EditableImage/EditableImage.css" />


<table cellpadding="0" cellspacing="0" class="ImgGalleryMainTable">
  <tr>
    <td valign="top" style="text-align: center;">
      <div id="ThumbnailsTableContainer" class="ThumbnailsTableContainer">
      </div>
      <div class="ScrollersContainer">
        <a title="גלול מעלה" onclick="ScrollUp()" class="Scroller FadeOnHover">▲</a> <a title="תמונה קודמת"
          onclick="SkipImg(-1)" class="LinkButtton ImgSkipper FadeOnHover">►</a>&nbsp;&nbsp;&nbsp;
        <a title="תמונה הבאה" onclick="SkipImg(1)" class="LinkButtton ImgSkipper FadeOnHover">
          ◄</a> <a title="גלול מטה" onclick="ScrollDown()" class="Scroller FadeOnHover">▼</a>
      </div>
    </td>
    <td valign="top">
      <div id="DisplayedImageContainer" class="DisplayedImageContainer">
        <img id="imgDisplayedImage" class="DisplayedImage" src="/Images/ImgGallery/Common/1.jpg" runat="server" /></div>
    </td>
  </tr>
</table>
<input type="hidden" class="hdnNumberOfFiles" id="hdnNumberOfFiles" runat="server" />