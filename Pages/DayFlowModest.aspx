<%@ Page Title="מהלך היום - חתונה מעורבת - רגעים מנצחים, צילום אירועים" Language="C#"
  MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="DayFlowModest.aspx.cs"
  Inherits="DayFlowModest" %>

<%@ Register Src="~/Controls/EditableText/EditableText.ascx" TagPrefix="Custom" TagName="EditableText" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
  <style type="text/css">
    .Content
    {
      height: 1000px;
    }
    .ContentBlock
    {
      width: 410px;
      float: right;
      height: 250px;
    }
  </style>
  <div class="DayFlow">
    <div class="ContentBlock" style="padding-left: 30px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/1d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="BrideAndGroomPhotos" />
    </div>
    <div class="ContentBlock">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/2d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowModest_FamilyPhotos" />
    </div>
    <div class="ContentBlock" style="padding-left: 30px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/3d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowModest_Welcome" />
    </div>
    <div class="ContentBlock">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/4d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowModest_Chuppah" />
    </div>
    <div class="ContentBlock" style="padding-left: 30px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/5d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowModest_PrivateRoom" />
    </div>
    <div class="ContentBlock">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/6d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowModest_Dancing" />
    </div>
    <div class="ContentBlock" style="padding-left: 30px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/7d.jpg" /></div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowModest_Tables" />
    </div>
    <div class="ContentBlock">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Modest/8d.jpg" /></div>
      <Custom:EditableText runat="server" Height="200" Width="450" Resource="Dayflow_Athmosphere" />
    </div>
  </div>
</asp:Content>
