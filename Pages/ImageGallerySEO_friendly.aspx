<%@ Page Title="גלרית תמונות - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="ImageGallerySEO_friendly.aspx.cs" Inherits="ImageGallery" %>
<%@ Register TagPrefix="Custom" TagName="Gallery" Src="~/Controls/Gallery/Gallery.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:PlaceHolder ID="plcCommon" runat="server" Visible="false">
   <div id="turn-me-into-stoa-common">
   <a href="/images/ImgGallery/common//Thumbnails/1.JPG">
      <img src="/images/ImgGallery/common//1.JPG" alt="title 1" />
    </a><a href="/images/ImgGallery/common//Thumbnails/2.JPG">
      <img src="/images/ImgGallery/common//2.JPG" alt="title 2" />
    </a><a href="/images/ImgGallery/common//Thumbnails/3.JPG">
      <img src="/images/ImgGallery/common//3.JPG" alt="title 3" />
    </a><a href="/images/ImgGallery/common//Thumbnails/4.JPG">
      <img src="/images/ImgGallery/common//4.JPG" alt="title 4" />
    </a><a href="/images/ImgGallery/common//Thumbnails/5.JPG">
      <img src="/images/ImgGallery/common//5.JPG" alt="title 5" />
    </a><a href="/images/ImgGallery/common//Thumbnails/6.JPG">
      <img src="/images/ImgGallery/common//6.JPG" alt="title 6" />
    </a><a href="/images/ImgGallery/common//Thumbnails/7.JPG">
      <img src="/images/ImgGallery/common//7.JPG" alt="title 7" />
    </a><a href="/images/ImgGallery/common//Thumbnails/8.JPG">
      <img src="/images/ImgGallery/common//8.JPG" alt="title 8" />
    </a><a href="/images/ImgGallery/common//Thumbnails/9.JPG">
      <img src="/images/ImgGallery/common//9.JPG" alt="title 9" />
    </a><a href="/images/ImgGallery/common//Thumbnails/10.JPG">
      <img src="/images/ImgGallery/common//10.JPG" alt="title 10" />
    </a><a href="/images/ImgGallery/common//Thumbnails/11.JPG">
      <img src="/images/ImgGallery/common//11.JPG" alt="title 11" />
    </a><a href="/images/ImgGallery/common//Thumbnails/12.JPG">
      <img src="/images/ImgGallery/common//12.JPG" alt="title 12" />
    </a><a href="/images/ImgGallery/common//Thumbnails/13.JPG">
      <img src="/images/ImgGallery/common//13.JPG" alt="title 13" />
    </a><a href="/images/ImgGallery/common//Thumbnails/14.JPG">
      <img src="/images/ImgGallery/common//14.JPG" alt="title 14" />
    </a><a href="/images/ImgGallery/common//Thumbnails/15.JPG">
      <img src="/images/ImgGallery/common//15.JPG" alt="title 15" />
    </a><a href="/images/ImgGallery/common//Thumbnails/16.JPG">
      <img src="/images/ImgGallery/common//16.JPG" alt="title 16" />
    </a><a href="/images/ImgGallery/common//Thumbnails/17.JPG">
      <img src="/images/ImgGallery/common//17.JPG" alt="title 17" />
    </a><a href="/images/ImgGallery/common//Thumbnails/18.JPG">
      <img src="/images/ImgGallery/common//18.JPG" alt="title 18" />
    </a><a href="/images/ImgGallery/common//Thumbnails/19.JPG">
      <img src="/images/ImgGallery/common//19.JPG" alt="title 19" />
    </a><a href="/images/ImgGallery/common//Thumbnails/20.JPG">
      <img src="/images/ImgGallery/common//20.JPG" alt="title 20" />
    </a><a href="/images/ImgGallery/common//Thumbnails/21.JPG">
      <img src="/images/ImgGallery/common//21.JPG" alt="title 21" />
    </a><a href="/images/ImgGallery/common//Thumbnails/22.JPG">
      <img src="/images/ImgGallery/common//22.JPG" alt="title 22" />
    </a><a href="/images/ImgGallery/common//Thumbnails/13.JPG">
      <img src="/images/ImgGallery/common//23.JPG" alt="title 23" />
    </a><a href="/images/ImgGallery/common//Thumbnails/24.JPG">
      <img src="/images/ImgGallery/common//24.JPG" alt="title 24" />
    </a><a href="/images/ImgGallery/common//Thumbnails/25.JPG">
      <img src="/images/ImgGallery/common//25.JPG" alt="title 25" />
    </a><a href="/images/ImgGallery/common//Thumbnails/26.JPG">
      <img src="/images/ImgGallery/common//26.JPG" alt="title 26" />
    </a><a href="/images/ImgGallery/common//Thumbnails/27.JPG">
      <img src="/images/ImgGallery/common//27.JPG" alt="title 27" />
    </a><a href="/images/ImgGallery/common//Thumbnails/28.JPG">
      <img src="/images/ImgGallery/common//28.JPG" alt="title 28" />
    </a><a href="/images/ImgGallery/common//Thumbnails/29.JPG">
      <img src="/images/ImgGallery/common//29.JPG" alt="title 29" />
    </a><a href="/images/ImgGallery/common//Thumbnails/30.JPG">
      <img src="/images/ImgGallery/common//30.JPG" alt="title 30" />
    </a><a href="/images/ImgGallery/common//Thumbnails/21.JPG">
      <img src="/images/ImgGallery/common//31.JPG" alt="title 31" />
    </a><a href="/images/ImgGallery/common//Thumbnails/32.JPG">
      <img src="/images/ImgGallery/common//32.JPG" alt="title 32" />
    </a><a href="/images/ImgGallery/common//Thumbnails/13.JPG">
      <img src="/images/ImgGallery/common//33.JPG" alt="title 33" />
    </a><a href="/images/ImgGallery/common//Thumbnails/34.JPG">
      <img src="/images/ImgGallery/common//34.JPG" alt="title 34" />
    </a><a href="/images/ImgGallery/common//Thumbnails/35.JPG">
      <img src="/images/ImgGallery/common//35.JPG" alt="title 35" />
    </a><a href="/images/ImgGallery/common//Thumbnails/36.JPG">
      <img src="/images/ImgGallery/common//36.JPG" alt="title 36" />
    </a><a href="/images/ImgGallery/common//Thumbnails/37.JPG">
      <img src="/images/ImgGallery/common//37.JPG" alt="title 37" />
    </a><a href="/images/ImgGallery/common//Thumbnails/38.JPG">
      <img src="/images/ImgGallery/common//38.JPG" alt="title 38" />
    </a><a href="/images/ImgGallery/common//Thumbnails/39.JPG">
      <img src="/images/ImgGallery/common//39.JPG" alt="title 39" />
    </a><a href="/images/ImgGallery/common//Thumbnails/20.JPG">
      <img src="/images/ImgGallery/common//40.JPG" alt="title 40" />
    </a>  </div>
    </asp:PlaceHolder>
    <asp:PlaceHolder ID="plcModest" runat="server" Visible="false">
    <div id="turn-me-into-stoa-modest">
    <a href="//images/ImgGallery/modest//Thumbnails/1.JPG">
      <img src="//images/ImgGallery/modest//1.JPG" alt="title 1" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/2.JPG">
      <img src="//images/ImgGallery/modest//2.JPG" alt="title 2" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/3.JPG">
      <img src="//images/ImgGallery/modest//3.JPG" alt="title 3" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/4.JPG">
      <img src="//images/ImgGallery/modest//4.JPG" alt="title 4" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/5.JPG">
      <img src="//images/ImgGallery/modest//5.JPG" alt="title 5" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/6.JPG">
      <img src="//images/ImgGallery/modest//6.JPG" alt="title 6" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/7.JPG">
      <img src="//images/ImgGallery/modest//7.JPG" alt="title 7" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/8.JPG">
      <img src="//images/ImgGallery/modest//8.JPG" alt="title 8" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/9.JPG">
      <img src="//images/ImgGallery/modest//9.JPG" alt="title 9" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/10.JPG">
      <img src="//images/ImgGallery/modest//10.JPG" alt="title 10" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/11.JPG">
      <img src="//images/ImgGallery/modest//11.JPG" alt="title 11" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/12.JPG">
      <img src="//images/ImgGallery/modest//12.JPG" alt="title 12" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/13.JPG">
      <img src="//images/ImgGallery/modest//13.JPG" alt="title 13" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/14.JPG">
      <img src="//images/ImgGallery/modest//14.JPG" alt="title 14" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/15.JPG">
      <img src="//images/ImgGallery/modest//15.JPG" alt="title 15" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/16.JPG">
      <img src="//images/ImgGallery/modest//16.JPG" alt="title 16" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/17.JPG">
      <img src="//images/ImgGallery/modest//17.JPG" alt="title 17" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/18.JPG">
      <img src="//images/ImgGallery/modest//18.JPG" alt="title 18" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/19.JPG">
      <img src="//images/ImgGallery/modest//19.JPG" alt="title 19" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/20.JPG">
      <img src="//images/ImgGallery/modest//20.JPG" alt="title 20" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/21.JPG">
      <img src="//images/ImgGallery/modest//21.JPG" alt="title 21" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/22.JPG">
      <img src="//images/ImgGallery/modest//22.JPG" alt="title 22" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/13.JPG">
      <img src="//images/ImgGallery/modest//23.JPG" alt="title 23" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/24.JPG">
      <img src="//images/ImgGallery/modest//24.JPG" alt="title 24" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/25.JPG">
      <img src="//images/ImgGallery/modest//25.JPG" alt="title 25" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/26.JPG">
      <img src="//images/ImgGallery/modest//26.JPG" alt="title 26" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/27.JPG">
      <img src="//images/ImgGallery/modest//27.JPG" alt="title 27" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/28.JPG">
      <img src="//images/ImgGallery/modest//28.JPG" alt="title 28" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/29.JPG">
      <img src="//images/ImgGallery/modest//29.JPG" alt="title 29" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/30.JPG">
      <img src="//images/ImgGallery/modest//30.JPG" alt="title 30" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/21.JPG">
      <img src="//images/ImgGallery/modest//31.JPG" alt="title 31" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/32.JPG">
      <img src="//images/ImgGallery/modest//32.JPG" alt="title 32" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/13.JPG">
      <img src="//images/ImgGallery/modest//33.JPG" alt="title 33" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/34.JPG">
      <img src="//images/ImgGallery/modest//34.JPG" alt="title 34" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/35.JPG">
      <img src="//images/ImgGallery/modest//35.JPG" alt="title 35" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/36.JPG">
      <img src="//images/ImgGallery/modest//36.JPG" alt="title 36" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/37.JPG">
      <img src="//images/ImgGallery/modest//37.JPG" alt="title 37" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/38.JPG">
      <img src="//images/ImgGallery/modest//38.JPG" alt="title 38" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/39.JPG">
      <img src="//images/ImgGallery/modest//39.JPG" alt="title 39" />
    </a><a href="//images/ImgGallery/modest//Thumbnails/20.JPG">
      <img src="//images/ImgGallery/modest//40.JPG" alt="title 40" />
    </a>
  </div>
  </asp:PlaceHolder>
</asp:Content>

