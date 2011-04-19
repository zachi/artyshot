<%@ Page Language="C#" AutoEventWireup="true" CodeFile="TestImageUpload.aspx.cs"  Inherits="TestImageUpload" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
  <title></title>
  <link rel="Stylesheet" type="text/css" href="/StyleSheet/StyleSheet.css" />
  <script type="text/javascript" src="/Javascript/jquery-1.5.1.min.js"></script>
  <script type="text/javascript" src="/Javascript/jquery.dialog/jquery-ui-1.8.11.custom.min.js"></script>
  <script type="text/javascript" src="/Controls/EditableImage/EditableImage.js"></script>
  <%--<link rel="Stylesheet" href="Javascript/jquery.dialog/ui-lightness/jquery-ui-1.8.11.custom.css" />--%>
  <link rel="Stylesheet" href="/Javascript/jquery.dialog/smoothness/jquery-ui-1.8.11.custom.css" />
  <link rel="stylesheet" href="/Controls/EditableImage/EditableImage.css" type="text/css" />
</head>
<body>
  <form id="form1" runat="server">
  <div style="margin: 30px; border: 1px solid red; width: 60px;">
    <img src="/Images/ImgGallery/Test/Original.JPG" />
  </div>
  <div style="margin: 30px; border: 1px solid red; width: 60px;">
    <img src="/Images/ImgGallery/Common/Thumbnails/2.JPG" />
  </div>
  </form>
</body>
</html>
