/****************************************************************************/
/***************************** Image Gallery ********************************/
/****************************************************************************/

$(document).ready(function ()
{
  $('#ThumbnailsContainer').bind('mousewheel', function (event, delta)
  {
    var nScrollDelta = normalizeDelta(delta)
    ScrollDelta(nScrollDelta);
    return false;
  });
});
function normalizeDelta(delta)
{
  return delta > 0 ? -43 : 43;
}
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
  var thumbnails = $('<ul id="Thumbnails"  />');
  var nNumberOfRows = GetNumberOfRows();
  for (var r = 0; r <= nNumberOfRows; r++)
  {
    var row = $('<li><ul>');
    for (var c = 1; c <= 2; c++)
    {
      var img = CreateImgElement(r, c, CategoryName);
      var thumbnailContainer = $('<li class="ThumbnailContainer" >');
      thumbnailContainer.append(img)
      row.find('ul').append(thumbnailContainer);
    }
    //tr2.appendTo(tr1);
    row.appendTo(thumbnails);
  }

  var ThumbnailsContainer = $('#ThumbnailsContainer');
  ThumbnailsContainer.empty();
  thumbnails.appendTo(ThumbnailsContainer);

  //select first thumbnail as DisplayedImage
  $('#Thumbnails img:first').trigger('click')

}



function GetNumberOfRows()
{
  var sNumberOfFiles = jQuery('.hdnNumberOfFiles').val();
  if (sNumberOfFiles == '')
    return 19;
  return (parseInt(sNumberOfFiles) / 2) - 1;
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
function ChangeImage(eventSrc)
{
  src = eventSrc.src.replace('/Thumbnails', '');
  $(".DisplayedImage").hide()
    .load(function ()
    {
      $(this).fadeIn();
    })
    .attr('src', src)
}

var intervalID = 0;

function ScrollContinuousStart(scrollFunc)
{
  intervalID = setInterval(scrollFunc, 30)
  //scrollFunc();
}

function ScrollContinuousStop()
{
  window.clearInterval(intervalID);
}

function ScrollDown()
{
  var thumbnailsContainer = jQuery('#ThumbnailsContainer');
  var nCurrentScroll = thumbnailsContainer.scrollTop();
  var nContentHeight = parseInt(jQuery('#Thumbnails').css('height').replace('px', ''));
  var nContainerHeight = parseInt(thumbnailsContainer.css('height').replace('px', ''));
  var nMaxScroll = nContentHeight - nContainerHeight;
  var nAdditionalScrollSize = 10;

  if (nCurrentScroll >= nMaxScroll)
    return;
  if ((nCurrentScroll + nAdditionalScrollSize) > nMaxScroll)
    nAdditionalScrollSize = nMaxScroll - nCurrentScroll;
  thumbnailsContainer.scrollTop(nCurrentScroll + nAdditionalScrollSize);
}

function ScrollUp()
{

  var thumbnailsContainer = jQuery('#ThumbnailsContainer');
  var nCurrentScroll = thumbnailsContainer.scrollTop();
  var nAdditionalScrollSize = 15;
  if (nCurrentScroll <= 0)
    return;
  else if ((nCurrentScroll - nAdditionalScrollSize) < 0)
    nAdditionalScrollSize = nCurrentScroll;
  thumbnailsContainer.scrollTop(nCurrentScroll - nAdditionalScrollSize);
}
//function ScrollDownEase()
//{
//  var thumbnailsTableContainer = jQuery('#ThumbnailsTableContainer');
//  var nCurrentScroll = thumbnailsTableContainer.scrollTop();
//  var nContentHeight = parseInt(jQuery('#ThumbnailsTable').css('height').replace('px', ''));
//  var nContainerHeight = parseInt(thumbnailsTableContainer.css('height').replace('px', ''));
//  var nMaxScroll = nContentHeight - nContainerHeight;
//  var nAdditionalScrollSize = 15;

//  if (nCurrentScroll >= nMaxScroll)
//    return;
//  if ((nCurrentScroll + nAdditionalScrollSize) > nMaxScroll)
//    nAdditionalScrollSize = nMaxScroll - nCurrentScroll;
//  thumbnailsTableContainer.animate({ scrollTop: nCurrentScroll + nAdditionalScrollSize }, 200);
//}


function ScrollDelta(nScrollDelta)
{
  if (nScrollDelta == 0)
    return;
  var thumbnailsContainer = jQuery('#ThumbnailsContainer');
  var nCurrentScroll = thumbnailsContainer.scrollTop();
  thumbnailsContainer.scrollTop(nCurrentScroll + nScrollDelta);
}
