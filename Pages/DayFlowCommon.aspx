<%@ Page Title="מהלך היום - חתונה מעורבת - רגעים מנצחים, צילום אירועים" Language="C#"
  MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="DayFlowCommon.aspx.cs"
  Inherits="DayFlowCommon" %>

<%@ Register Src="~/Controls/EditableText/EditableText.ascx" TagPrefix="Custom" TagName="EditableText" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
  <style type="text/css">
    .ContentBlock
    {
      width: 410px;
      float: right;
      height: 250px;
    }
  </style>
  <div class="DayFlow" style="padding-top: 40px;">
    <div class="ContentBlock" style="padding-left: 30px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Common/1c.jpg" />
      </div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowCommon_MakeupAndOutsidePhotos" />
    </div>
    <div class="ContentBlock">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Common/2c.jpg" /></div>
        <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowCommon_Welcome" />
    </div>
    <div class="ContentBlock" style="padding-left: 30px; height: 150px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Common/3c.jpg" />
      </div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowCommon_Chupah" />
    </div>
    <div class="ContentBlock" style="height: 150px;">
      <div class="Border" style="width: 303px;">
        <img src="/Images/DayFlow/Common/4c.jpg" />
      </div>
      <Custom:EditableText runat="server" Height="250" Width="450" Resource="DayFlowCommon_Dancing" />
    </div>
    <%--<div class="ContentBlock" style="height:150px;">
<div class="Border" style="width:303px;">
<img src="/Images/DayFlow/Common/4c.jpg" /> </div>
<p><b><span>סבב שולחנות</span></b><br />
<span> יעשה עם הזוג או ע&quot;פ רשימת שולחנות עיקריים לצילום שישלחו מבעוד
מועד</span>
<br />
<span>אנו נדאג
שהאוירה תהיה רגועה וחיובית, הצלמים יהיו נעימים וצנועים, הצילומים יהיו ספונטניים
ואומנותיים והעיקר שלא יחסר דבר.</span></p>

</div>--%>
  </div>
</asp:Content>
