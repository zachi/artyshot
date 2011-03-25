
google.load("jqueryui", "1.5.2");
jQuery(document).ready(function () {
    $('.FadeOnHover').hover(
                function () {
                    $(this).animate({ backgroundColor: '#EAEAEA', color: '#0a3768' }, { queue: false, duration: 500 });
                }, function () {
                    $(this).animate({ backgroundColor: 'White', color: '#4f647c' }, { queue: false, duration: 500 });
                });
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-22016740-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function ChangeVideo(eventElement) {
    //    var eventElement = event.srcElement != null ? event.srcElement : event.target;
    jQuery('.VideoThumbnail, .VideoThumbnailSelected').removeClass('VideoThumbnailSelected');
    jQuery(eventElement).addClass('VideoThumbnailSelected');
    var newDisplayedVideo = jQuery("#" + eventElement.id.replace('VideoThumbnail', 'VideoContainer'));
    var previousDisplayedVideo = jQuery(".VideoContainer, .Show");
    previousDisplayedVideo.addClass("Hide");
    previousDisplayedVideo.removeClass("Show");

    newDisplayedVideo.addClass("Show");
    newDisplayedVideo.removeClass("Hide");
}

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