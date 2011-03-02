<%@ Page Title="גלרית תמונות - רגעים מנצחים, צילום אירועים" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="ImgGallery.aspx.cs" Inherits="ImgGallery" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <script type="text/javascript">


        function ChangeCategory(CategoryName) {
            //create new thumbnails table
            var Table = $('<table id="ThumbnailsTable" cellpadding="0" cellspacing="0" />');
            var nNumberOfRows = GetNumberOfRows();

            for (var r = 0; r <= nNumberOfRows; r++) {
                var imgPath = src = "Images/ImgGallery/' + CategoryName + '/Thumbnails/' + ((r * 2) + c) + '.jpg";
                var trow = $('<tr>');
                for (var c = 1; c <= 2; c++) {
                    var newImg = $('<img id="Thumbnail_' + ((r * 2) + c) + '" src="Images/ImgGallery/' + CategoryName + '/Thumbnails/' + ((r * 2) + c) + '.jpg" />');
                    newImg.click(function (event) {

                        jQuery('.SelectedImg').removeClass('SelectedImg');
                        jQuery(this).addClass('SelectedImg');
                        var eventElement = event.srcElement != null ? event.srcElement : event.target;
                        ChangeImage(eventElement);
                    })
                    newImg.addClass('ClickableImage')

                    $('<td>')
                         .addClass('TDLink')
                         .data('col', c)
                         .append(newImg)
                         .appendTo(trow);
                }
                trow.appendTo(Table);
            }

            var ThumbnailsTableContainer = $('#ThumbnailsTableContainer');
            ThumbnailsTableContainer.empty();
            Table.appendTo(ThumbnailsTableContainer);
            //select first thumbnail as DisplayedImage
            //ChangeImage($('#ThumbnailsTable tbody img:first').get(0))
            //$('#ThumbnailsTable tbody img:first').trigger('click')

        }

        function GetNumberOfRows() {
            var sNumberOfFiles = jQuery('.hdnNumberOfFiles').val();
            if (sNumberOfFiles == '')
                return 19;
            return (parseInt(sNumberOfFiles) / 2) - 1;
        }

        function ChangeImage(eventSrc) {
//            src = eventSrc.src.replace('/Thumbnails', '');
//            $(".DisplayedImage").fadeOut(200, function () {
//                $(".DisplayedImage").attr('src', src).bind('readystatechange load', function () {
//                    //if (this.complete) 
//                    $(this).fadeIn(400);
//                });
            //            });
            src = eventSrc.src.replace('/Thumbnails', '');
            $(".DisplayedImage").attr('src', src);

        }

        function ScrollDown() {
            var thumbnailsTableContainer = jQuery('#ThumbnailsTableContainer');
            var nCurrentScroll = thumbnailsTableContainer.scrollTop();
            var nContentHeight = parseInt(jQuery('#ThumbnailsTable').css('height').replace('px', ''));
            var nContainerHeight = parseInt(thumbnailsTableContainer.css('height').replace('px', ''));
            var nMaxScroll = nContentHeight - nContainerHeight;
            var nAdditionalScrollSize = 172;

            if (nCurrentScroll >= nMaxScroll)
                return;
            else if ((nCurrentScroll + nAdditionalScrollSize) > nMaxScroll)
                nAdditionalScrollSize = nMaxScroll - nCurrentScroll;
            thumbnailsTableContainer.animate({ scrollTop: nCurrentScroll + nAdditionalScrollSize }, 'slow');
        }
        function ScrollUp() {

            var thumbnailsTableContainer = jQuery('#ThumbnailsTableContainer');
            var nCurrentScroll = thumbnailsTableContainer.scrollTop();
            var nAdditionalScrollSize = 170;
            if (nCurrentScroll <= 0)
                return;
            else if ((nCurrentScroll - nAdditionalScrollSize) < 0)
                nAdditionalScrollSize = nCurrentScroll;
            thumbnailsTableContainer.animate({ scrollTop: nCurrentScroll - nAdditionalScrollSize }, 'slow');
        }
        function SkipImg(nImgsToSkip) {
            var selectedImg = jQuery('.SelectedImg');
            var sNextImgID = selectedImg.attr('id').replace('Thumbnail_', '');
            var nNextImgID = parseInt(sNextImgID) + nImgsToSkip;
            selectedImg.removeClass('SelectedImg');
            var nextImg = jQuery('#Thumbnail_' + nNextImgID)
            if (nextImg.length == 0)
                nextImg = jQuery('#Thumbnail_1')
            nextImg.trigger('click')
        }
       
    </script>
    <style type="text/css">.Content{padding-top:10px;}</style>
<table cellpadding="0" cellspacing="0" class="ImgGalleryMainTable">
      
        <tr>
             <td valign="top" style="text-align:center;">
                <div id="ThumbnailsTableContainer" class="ThumbnailsTableContainer"  >
                </div>
                <div class="ScrollersContainer">
                <a title="גלול מעלה" onclick="ScrollUp()" class="Scroller FadeOnHover" >▲</a>
                <a title="תמונה קודמת" onclick="SkipImg(-1)" class="LinkButtton ImgSkipper FadeOnHover" >►</a>&nbsp;&nbsp;&nbsp;
                <a title="תמונה הבאה" onclick="SkipImg(1)" class="LinkButtton ImgSkipper FadeOnHover"  >◄</a>
                <a title="גלול מטה" onclick="ScrollDown()" class="Scroller FadeOnHover" >▼</a>
                 </div>
            </td>
            <td valign="top">
            <div  id="DisplayedImageContainer" class="DisplayedImageContainer"  >
                <img id="imgDisplayedImage" class="DisplayedImage" src="Images/ImgGallery/Common/1.jpg" runat="server" /></div>
            </td>
            
           
        </tr>
       
    </table>
    <input type="hidden" class="hdnNumberOfFiles" id="hdnNumberOfFiles" runat="server" />
</asp:Content>

