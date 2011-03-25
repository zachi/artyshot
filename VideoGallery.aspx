<%@ Page Title="וידאו - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="VideoGallery.aspx.cs" Inherits="VideoGallery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div class="Video">

    <div class="VideoThumbnails">
        <div id="VideoThumbnail_1" class="VideoThumbnail VideoThumbnailSelected" onclick="ChangeVideo(this)">
            <img src="Images/Video/clip_hatuna.jpg" />
        </div>
        <div id="VideoThumbnail_12" class="VideoThumbnail" onclick="ChangeVideo(this)">
            <img src="Images/Video/clip_hatuna.jpg" />
        </div>
        <div id="VideoThumbnail_2" class="VideoThumbnail" onclick="ChangeVideo(this)">
            <img src="Images/Video/clip_ptiha.jpg" />
        </div>
        <div id="VideoThumbnail_3" class="VideoThumbnail" onclick="ChangeVideo(this)">
            <img src="Images/Video/clip_sium.jpg" />
        </div>
        <div id="VideoThumbnail_4" class="VideoThumbnail" onclick="ChangeVideo(this)">
            <img src="Images/Video/clip_sium.jpg" />
        </div>
        <div id="VideoThumbnail_5" class="VideoThumbnail" onclick="ChangeVideo(this)">
            <img src="Images/Video/clip_sium.jpg" />
        </div>
        <div id="VideoThumbnail_6" class="VideoThumbnail" onclick="ChangeVideo(this)">
            <img src="Images/Video/show.jpg" />
        </div>
    </div>
    <div id="VideoContainer_1" class="VideoContainer Border Show">
      <object width="650" height="400"><param name="movie" value="http://www.youtube.com/v/Jxc_TTs0WAU&amp;hl=en_US&amp;fs=1?rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/Jxc_TTs0WAU&amp;hl=en_US&amp;fs=1?rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object>
    </div>
    <div id="VideoContainer_12" class="VideoContainer Border Hide">
      <object width="650" height="400"><param name="movie" value="http://www.youtube-nocookie.com/v/Z3OrimRnbIs?fs=1&amp;hl=en_US&amp;rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube-nocookie.com/v/Z3OrimRnbIs?fs=1&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object>
    </div>
    <div id="VideoContainer_2" class="VideoContainer Border Hide">
      <object width="650" height="400"><param name="movie" value="http://www.youtube.com/v/7xkKxHCdg2k&amp;hl=en_US&amp;fs=1?rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/7xkKxHCdg2k&amp;hl=en_US&amp;fs=1?rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object> 
    </div>
    <div id="VideoContainer_3" class="VideoContainer Border Hide">
       <object width="650" height="400"><param name="movie" value="http://www.youtube.com/v/O2C62h1Qosc&amp;hl=en_US&amp;fs=1?rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/O2C62h1Qosc&amp;hl=en_US&amp;fs=1?rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object>
    </div>
    <div id="VideoContainer_4" class="VideoContainer Border Hide">
       <object width="650" height="400"><param name="movie" value="http://www.youtube.com/v/JQb-E9GZdEg&amp;hl=en_US&amp;fs=1?rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/JQb-E9GZdEg&amp;hl=en_US&amp;fs=1?rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object>
    </div>
    <div id="VideoContainer_5" class="VideoContainer Border Hide">
     <object width="650" height="400"><param name="movie" value="http://www.youtube.com/v/8ndtDjX2wTI&amp;hl=en_US&amp;fs=1?rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/8ndtDjX2wTI&amp;hl=en_US&amp;fs=1?rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object>
    </div>
    <div id="VideoContainer_6" class="VideoContainer Border Hide">
      <object width="650" height="400"><param name="movie" value="http://www.youtube.com/v/TZEdwqSxflU&amp;hl=en_US&amp;fs=1?rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/TZEdwqSxflU&amp;hl=en_US&amp;fs=1?rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="650" height="400"></embed></object>   
    </div>
    <div style="clear:both;"></div>
</div>
</asp:Content>

