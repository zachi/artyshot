(function ($, undefined) {

  $.widget("ui.stoa", {


    options: {// default options
      numberOfThumbnails: 40,
      thumbnailsFolderName: 'common',
      direction: 'ltr',
      scrollerUpText : 'scroll up',
      scrollerDownText : 'scroll down',
      rightButtonText : 'next',
      leftButtonText : 'previous'
     


    },

    _create: function () {
      var self = this;
      var scrollContinuousIntervalID = 0;

      self.initDirectionDefaults();
      self.initDOMStracture();
      self.initThumbnails();
      self.initThumbnailsWheelScroll();
      self.initNavigationControllers();
    },

    initDirectionDefaults: function () {
      var self = this;
      if (self.options.direction == 'rtl') {
        self.options.scrollerUpText = 'גלול מעלה';
        self.options.scrollerDownText= 'גלול מטה';
        self.options.rightButtonText= 'תמונה קודמת';
        self.options.leftButtonText= 'תמונה הבאה';
      }
    },
    initThumbnailsWheelScroll: function () {
      var self = this;
      $('#stoa-navbar-thumbnails-container').bind('mousewheel', function (event, delta) {
        var scrollDelta = self.normalizeDelta(delta)
        self.scrollDelta(scrollDelta);
        return false;
      });
    },

    initDOMStracture: function () {
      var self = this;
      self.element.addClass('stoa');
      self.element.append(self.getGalleryHtml());
    },

    initNavigationControllers: function () {
      var self = this;
      $('#stoa-navbar-scroller-up').bind('mousedown', function () {
        self.scrollContinuousStart(self.scrollUp);
      });
      $('#stoa-navbar-scroller-up').bind('mouseup', function () {
        self.scrollContinuousStop();
      });

      $('#stoa-navbar-scroller-down').bind('mousedown', function () {
        self.scrollContinuousStart(self.scrollDown);
      });
      $('#stoa-navbar-scroller-down').bind('mouseup', function () {
        self.scrollContinuousStop();
      });

      $('#stoa-navbar-controllers-right').bind('click', function () {
        var deltaToDestinationImg = self.options.direction == 'ltr' ? 1 : -1;
        self.skipImg(deltaToDestinationImg);
      });

      $('#stoa-navbar-controllers-left').bind('click', function () {
        var deltaToDestinationImg = self.options.direction == 'ltr' ? -1 : 1;
        self.skipImg(deltaToDestinationImg);
      });

      $('img#stoa-main-image').bind('click', function () {
        self.skipImg(1);
      });
    },

    getGalleryHtml: function () {
      var self = this;
      return '<div class="stoa-navbar">' +
              '  <div id="stoa-navbar-thumbnails-container" class="stoa-navbar-thumbnails-container">' +
              '  </div>' +
              '  <div class="stoa-navbar-controllers">' +
              '    <a id="stoa-navbar-scroller-up" title="' + self.options.scrollerUpText + '"  class="stoa-navbar-scroller-up FadeOnHover">▲</a>' +
              '    <a id="stoa-navbar-controllers-right" title="' + self.options.rightButtonText + '" class="stoa-navbar-controllers-right FadeOnHover">►</a>&nbsp;&nbsp;&nbsp;' +
              '    <a id="stoa-navbar-controllers-left" title="' + self.options.leftButtonText + '" class="stoa-navbar-controllers-left FadeOnHover">◄</a>' +
              '    <a id="stoa-navbar-scroller-down" title="' + self.options.scrollerDownText + '" class="stoa-navbar-scroller-down FadeOnHover">▼</a>' +
              '  </div>' +
              '</div>' +
              '<div id="stoa-main" class="stoa-main">' +
              '  <img id="stoa-main-image" class="stoa-main-image" src="/Images/ImgGallery/Common/1.jpg" runat="server" />' +
              '</div>' +
              '<div style="clear:both;"></div>';


    },

    initThumbnails: function () {
      var self = this;
      var thumbnails = $('<ul id="stoa-navbar-thumbnails-list"  />');
      var nNumberOfRows = self.getNumberOfRows(self.options.numberOfThumbnails);
      for (var r = 0; r <= nNumberOfRows; r++) {
        var row = $('<li><ul>');
        for (var c = 1; c <= 2; c++) {
          var img = self.createThumbnailImg(r, c);
          var thumbnailContainer = $('<li class="stoa-navbar-thumbnail-container" >');
          thumbnailContainer.append(img)
          row.find('ul').append(thumbnailContainer);
        }
        row.appendTo(thumbnails);
      }

      var thumbnailsContainer = $('#stoa-navbar-thumbnails-container');
      thumbnailsContainer.empty();
      thumbnails.appendTo(thumbnailsContainer);

      //select first thumbnail as DisplayedImage
      $('#stoa-navbar-thumbnails-list img:first').trigger('click')

    },

    normalizeDelta: function (delta) {
      return delta > 0 ? -43 : 43;
    },

    createThumbnailImg: function (row, column) {
      var self = this;
      var imgName = ((row * 2) + column);
      var newImg = $('<img class="stoa-navbar-thumbnail-image" id="thumbnail-' + imgName + '" src="/Images/ImgGallery/' + self.options.thumbnailsFolderName + '/Thumbnails/' + imgName + '.jpg" />');
      newImg.click(function (event) {
        jQuery('img.stoa-navbar-thumbnail-image-selected').removeClass('stoa-navbar-thumbnail-image-selected');
        jQuery(this).addClass('stoa-navbar-thumbnail-image-selected');
        var eventElement = event.srcElement != null ? event.srcElement : event.target;
        self.changeImage(eventElement);
      })
      return newImg;
    },

    getNumberOfRows: function (numberOfFiles) {
      return (numberOfFiles / 2) - 1;
    },

    skipImg: function (nImgsToSkip) {
      var selectedThumbnail = jQuery('img.stoa-navbar-thumbnail-image-selected');
      var sNextImgID = selectedThumbnail.attr('id').replace('thumbnail-', '');
      var nNextImgID = parseInt(sNextImgID) + nImgsToSkip;
      selectedThumbnail.removeClass('stoa-navbar-thumbnail-image-selected');
      var nextImg = jQuery('#thumbnail-' + nNextImgID)
      if (nextImg.length == 0)
        nextImg = jQuery('#thumbnail-1')
      nextImg.trigger('click')
    },

    changeImage: function (eventSrc) {
      src = eventSrc.src.replace('/Thumbnails', '');
      $('img.stoa-main-image').hide().load(function () {
        $(this).fadeIn();
      }).attr('src', src)
    },

    scrollContinuousStart: function (scrollFunc) {
      var self = this;
      self.scrollContinuousIntervalID = setInterval(scrollFunc, 30)
      //scrollFunc();
    },

    scrollContinuousStop: function () {
      var self = this;
      window.clearInterval(self.scrollContinuousIntervalID);
    },

    scrollDown: function () {
      var thumbnailsContainer = jQuery('#stoa-navbar-thumbnails-container');
      var nCurrentScroll = thumbnailsContainer.scrollTop();
      var nContentHeight = parseInt(jQuery('#stoa-navbar-thumbnails-list').css('height').replace('px', ''));
      var nContainerHeight = parseInt(thumbnailsContainer.css('height').replace('px', ''));
      var nMaxScroll = nContentHeight - nContainerHeight;
      var nAdditionalScrollSize = 10;

      if (nCurrentScroll >= nMaxScroll)
        return;
      if ((nCurrentScroll + nAdditionalScrollSize) > nMaxScroll)
        nAdditionalScrollSize = nMaxScroll - nCurrentScroll;
      thumbnailsContainer.scrollTop(nCurrentScroll + nAdditionalScrollSize);
    },

    scrollUp: function () {

      var thumbnailsContainer = jQuery('#stoa-navbar-thumbnails-container');
      var nCurrentScroll = thumbnailsContainer.scrollTop();
      var nAdditionalScrollSize = 15;
      if (nCurrentScroll <= 0)
        return;
      else if ((nCurrentScroll - nAdditionalScrollSize) < 0)
        nAdditionalScrollSize = nCurrentScroll;
      thumbnailsContainer.scrollTop(nCurrentScroll - nAdditionalScrollSize);
    },

    scrollDelta: function (nScrollDelta) {
      if (nScrollDelta == 0)
        return;
      var thumbnailsContainer = jQuery('#stoa-navbar-thumbnails-container');
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



  });

})(jQuery);











