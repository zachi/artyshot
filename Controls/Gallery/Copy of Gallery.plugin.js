(function ($)
{
  $.fn.gallery = function (options)
  {
    var self = this;
    
    
    var settings = {
      'numberOfThumbnails': 40,
      'thumbnailsFolderName': 'common'
    };
    
    InitSettings(options);
    InitHtml(this);
    InitThumbnails();
    InitThumbnailsWheelScroll();
    InitNavigationBar();
    return self;


    InitThumbnailsWheelScroll : function()
    {
      $('#ThumbnailsContainer').bind('mousewheel', function (event, delta)
      {
        var nScrollDelta = normalizeDelta(delta)
        ScrollDelta(nScrollDelta);
        return false;
      });
    },
    InitHtml : function()
    {
      self.append(getGalleryHtml());
    }
    function InitSettings(options)
    {
      if (options)
      {
        $.extend(settings, options);
      }
    }
    function InitNavigationBar()
    {
      $('#ScrollerUp').bind('mousedown', function ()
      {
        ScrollContinuousStart(ScrollUp);
      });
      $('#ScrollerUp').bind('mouseup', function ()
      {
        ScrollContinuousStop();
      });

      $('#ScrollerDown').bind('mousedown', function ()
      {
        ScrollContinuousStart(ScrollDown);
      });
      $('#ScrollerDown').bind('mouseup', function ()
      {
        ScrollContinuousStop();
      });

      $('#ImgSkipperRight').bind('click', function ()
      {
        SkipImg(-1);
      });

      $('#ImgSkipperLeft').bind('click', function ()
      {
        SkipImg(1);
      });
    }
    function getGalleryHtml()
    {
      return '<div class="ThumbnailsAndScrollers">' +
              '  <div id="ThumbnailsContainer" class="ThumbnailsContainer">' +
              '  </div>' +
              '  <div class="ScrollersContainer">' +
              '    <a id="ScrollerUp" title="גלול מעלה"  class="Scroller FadeOnHover">▲</a>' +
              '    <a id="ImgSkipperRight" title="תמונה קודמת" class="ImgSkipper ImgSkipperRight FadeOnHover">►</a>&nbsp;&nbsp;&nbsp;' +
              '    <a id="ImgSkipperLeft" title="תמונה הבאה" class="ImgSkipper FadeOnHover">◄</a>' +
              '    <a id="ScrollerDown" title="גלול מטה" class="Scroller FadeOnHover">▼</a>' +
              '  </div>' +
              '</div>' +
              '<div id="DisplayedImageContainer" class="DisplayedImageContainer">' +
              '  <img id="imgDisplayedImage" class="DisplayedImage" src="/Images/ImgGallery/Common/1.jpg" runat="server" />' +
              '</div>' +
              '<div style="clear:both;"></div>';
    }
    function InitThumbnails()
    {
      var thumbnails = $('<ul id="Thumbnails"  />');
      var nNumberOfRows = GetNumberOfRows(settings.numberOfThumbnails);
      for (var r = 0; r <= nNumberOfRows; r++)
      {
        var row = $('<li><ul>');
        for (var c = 1; c <= 2; c++)
        {
          var img = CreateImgElement(r, c, settings.thumbnailsFolderName);
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
    function normalizeDelta(delta)
    {
      return delta > 0 ? -43 : 43;
    }
    function CreateImgElement(row, column, CategoryName)
    {
      var imgName = ((row * 2) + column);
      var newImg = $('<img class="ThumbnailImage" id="Thumbnail_' + imgName + '" src="/Images/ImgGallery/' + CategoryName + '/Thumbnails/' + imgName + '.jpg" />');
      newImg.click(function (event)
      {
        jQuery('.SelectedThumbnail').removeClass('SelectedThumbnail');
        jQuery(this).addClass('SelectedThumbnail');
        var eventElement = event.srcElement != null ? event.srcElement : event.target;
        ChangeImage(eventElement);
      })
      return newImg;
    }

    function GetNumberOfRows(numberOfFiles)
    {
      return (numberOfFiles / 2) - 1;
    }
    function SkipImg(nImgsToSkip)
    {
      var SelectedThumbnail = jQuery('.SelectedThumbnail');
      var sNextImgID = SelectedThumbnail.attr('id').replace('Thumbnail_', '');
      var nNextImgID = parseInt(sNextImgID) + nImgsToSkip;
      SelectedThumbnail.removeClass('SelectedThumbnail');
      var nextImg = jQuery('#Thumbnail_' + nNextImgID)
      if (nextImg.length == 0)
        nextImg = jQuery('#Thumbnail_1')
      nextImg.trigger('click')
    }
    function ChangeImage(eventSrc)
    {
      src = eventSrc.src.replace('/Thumbnails', '');
      $(".DisplayedImage").hide().load(function ()
                                    {
                                      $(this).fadeIn();
                                    }).attr('src', src)
    }

    var scrollContinuousIntervalID = 0;

    function ScrollContinuousStart(scrollFunc)
    {
      scrollContinuousIntervalID = setInterval(scrollFunc, 30)
      //scrollFunc();
    }

    function ScrollContinuousStop()
    {
      window.clearInterval(scrollContinuousIntervalID);
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

    function ScrollDelta(nScrollDelta)
    {
      if (nScrollDelta == 0)
        return;
      var thumbnailsContainer = jQuery('#ThumbnailsContainer');
      var nCurrentScroll = thumbnailsContainer.scrollTop();
      thumbnailsContainer.scrollTop(nCurrentScroll + nScrollDelta);
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



  };
})(jQuery);











