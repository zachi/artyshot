/****************************************************************************/
/***************************** Image Gallery ********************************/
/****************************************************************************/

$(document).ready(function ()
{
  ChangeCategory('Common')
});

function CreateImgElement(row, column, CategoryName)
{
  var imgName = ((row * 2) + column);
  var newImg = $('<img class="ClickableImage" id="Thumbnail_' + imgName + '" src="/Images/ImgGallery/' + CategoryName + '/Thumbnails/' + imgName + '.jpg" />');
  newImg.click(function (event)
  {
    jQuery('.SelectedImg').removeClass('SelectedImg');
    jQuery(this).addClass('SelectedImg');
    var eventElement = event.srcElement != null ? event.srcElement : event.target;
    ChangeImage(eventElement);
  })

  return newImg;
}

function ChangeCategory(CategoryName)
{
  var Table = $('<table id="ThumbnailsTable" cellpadding="0" cellspacing="0" />');
  var nNumberOfRows = GetNumberOfRows();
  for (var r = 0; r <= nNumberOfRows; r++)
  {
    var tr = $('<tr>');
    for (var c = 1; c <= 2; c++)
    {
      var img = CreateImgElement(r, c, CategoryName);
      var td = $('<td class="TDLink" >');
      td.append(img)
      tr.append(td);
    }
    tr.appendTo(Table);
  }

  var ThumbnailsTableContainer = $('#ThumbnailsTableContainer');
  ThumbnailsTableContainer.empty();
  Table.appendTo(ThumbnailsTableContainer);

  //    var keepScroll = true;
  //    Table.bind('mousedown', function () {
  //      while (keepScroll)
  //        ScrollDown();
  //    });
  //    Table.bind('mouseup', function () { keepScroll = false; });
  //Table.bind('scroll', function () { alert('scroll'); });
  //select first thumbnail as DisplayedImage
  //ChangeImage($('#ThumbnailsTable tbody img:first').get(0))
  //$('#ThumbnailsTable tbody img:first').trigger('click')

}

function GetNumberOfRows()
{
  var sNumberOfFiles = jQuery('.hdnNumberOfFiles').val();
  if (sNumberOfFiles == '')
    return 19;
  return (parseInt(sNumberOfFiles) / 2) - 1;
}

function ChangeImage(eventSrc)
{
  src = eventSrc.src.replace('/Thumbnails', '');
  $(".DisplayedImage").fadeOut(200, function ()
  {
    $(".DisplayedImage").attr('src', src).bind('readystatechange load', function ()
    {
      //if (this.complete) 
      $(this).fadeIn(400);
    });
  });
  //    src = eventSrc.src.replace('/Thumbnails', '');
  //    $(".DisplayedImage").attr('src', src);

}

function ScrollDown()
{
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
function ScrollUp()
{

  var thumbnailsTableContainer = jQuery('#ThumbnailsTableContainer');
  var nCurrentScroll = thumbnailsTableContainer.scrollTop();
  var nAdditionalScrollSize = 170;
  if (nCurrentScroll <= 0)
    return;
  else if ((nCurrentScroll - nAdditionalScrollSize) < 0)
    nAdditionalScrollSize = nCurrentScroll;
  thumbnailsTableContainer.animate({ scrollTop: nCurrentScroll - nAdditionalScrollSize }, 'slow');
}
function SkipImg(nImgsToSkip)
{
  var selectedImg = jQuery('.SelectedImg');
  var sNextImgID = selectedImg.attr('id').replace('Thumbnail_', '');
  var nNextImgID = parseInt(sNextImgID) + nImgsToSkip;
  selectedImg.removeClass('SelectedImg');
  var nextImg = jQuery('#Thumbnail_' + nNextImgID)
  if (nextImg.length == 0)
    nextImg = jQuery('#Thumbnail_1')
  nextImg.trigger('click')
}
