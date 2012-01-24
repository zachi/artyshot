﻿(function ($, undefined) {

  $.widget("ui.stoa", {

    options: { // default options
      numberOfThumbnails: 40,
      thumbnailsFolderName: 'none',
      direction: 'ltr',
      scrollerUpText: 'scroll up',
      scrollerDownText: 'scroll down',
      rightButtonText: 'next',
      leftButtonText: 'previous',
      thumbnailsOpacityHoverEffect: true

    },

    _create: function () {
      var self = this;
      self.scrollContinuousIntervalID = -1;

      self.initDirectionDefaults();
      self.createHTML_initDOMStracture();
      self.initThumbnails();
      self.thumbnailsOpacityHoverEffect();
      self.initThumbnailsWheelScroll();
      self.initNavigationControllers();
      self.initKeyboardEventsControl();
    },

    initDirectionDefaults: function () {
      var self = this;
      if (self.options.direction == 'rtl') {
        self.options.scrollerUpText = 'גלול מעלה';
        self.options.scrollerDownText = 'גלול מטה';
        self.options.rightButtonText = 'תמונה קודמת';
        self.options.leftButtonText = 'תמונה הבאה';
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
        if (self.options.direction == 'ltr') self.selectNextImage();
        else self.selectPreviousImage();
      });

      $('#stoa-navbar-controllers-left').bind('click', function () {
        if (self.options.direction == 'ltr') self.selectPreviousImage();
        else self.selectNextImage();

      });

      $('img#stoa-main-image').bind('click', function () {
        self.selectNextImage();
      });
    },

    initKeyboardEventsControl: function(){
      var  self = this;
      
      $(document).keydown(function (e)
      {
        if (e.which == 39) 
        {
            if (self.options.direction == 'ltr') self.selectNextImage();
              else self.selectPreviousImage();
        }
         if (e.which == 37) 
        {
          if (self.options.direction == 'ltr') 
            self.selectPreviousImage();
          else 
            self.selectNextImage();
        }
        if(self.scrollStarted())
          return;
        if (e.which == 40) 
        {
        self.scrollContinuousStart(self.scrollDown);
        }
        if (e.which == 38) 
        {
        self.scrollContinuousStart(self.scrollUp);
        }
      })
      $(document).keyup(function (e)
      {
       if (e.which == 40 || e.which == 38) 
        {
          self.scrollContinuousStop();
        }
      })
    },
    
    selectNextImage: function () {
      var selected = $('img.stoa-navbar-thumbnail-image-selected');
      var next = selected.next();
      if (next.length == 0) {
        next = selected.parent().parent().parent().next().find('img:first')
      }
      next.trigger('click')
    },

    selectPreviousImage: function () {

      var selected = $('img.stoa-navbar-thumbnail-image-selected');
      var prev = selected.prev();
      if (prev.length == 0) {
        prev = selected.parent().parent().parent().prev().find('img:last')
      }
      if (prev.length == 0) return;
      prev.trigger('click')
    },

    initThumbnails: function () {
      var self = this;
      if (self.options.thumbnailsFolderName == 'none')
        self.createHTML_ThumbnailsFromMarkup();
      else
        self.createHTML_ThumbnailsWithFolderName();
    },

    getThumbnailImgSrc: function (imgElement) {
      var JQelement = $(imgElement);
      if (!JQelement.exists())
        return imgElement;
      if (JQelement.attr('tagName').toLowerCase() == 'a') return JQelement.attr('href');
      return JQelement.attr('src');
    },

    getImgSrc: function (imgElement) {
      var JQelement = $(imgElement);
      if (JQelement.attr('tagName').toLowerCase() == 'a') return JQelement.find('img').attr('src');
      return JQelement.attr('src');
    },

    getThumbnailImgTitle: function (imgElement) {
      var JQelement = $(imgElement);
      if (JQelement.attr('tagName').toLowerCase() == 'a') return JQelement.find('img').attr('alt');
      return JQelement.attr('alt');
    },

    createThumbnailImgFromDomElement: function (imgElement) {
      var self = this;
      var thumbnailSrc = self.getThumbnailImgSrc(imgElement);
      var imgSrc = self.getImgSrc(imgElement);
      var imgTitle = self.getThumbnailImgTitle(imgElement);
      return self.createHTML_ThumbnailImg(thumbnailSrc, imgSrc, imgTitle);
    },

    thumbnailClicked: function (event) {
      var self = this;
      var eventElement = event.srcElement != null ? event.srcElement : event.target;
      var prevSelectedImg = jQuery('img.stoa-navbar-thumbnail-image-selected');
      self.bindHoverEffect(prevSelectedImg.get(0));
      prevSelectedImg.removeClass('stoa-navbar-thumbnail-image-selected');
      jQuery(eventElement).addClass('stoa-navbar-thumbnail-image-selected');
      self.unbindHoverEffect(eventElement);
      self.changeMainImage(eventElement);
    },

    getNumberOfRows: function (numberOfFiles) {
      return (numberOfFiles / 2) - 1;
    },

    changeMainImage: function (eventSrc) {
      var src = $(eventSrc).attr('imgSrc');
      var title = $(eventSrc).attr('alt');
      $('img.stoa-main-image').hide().load(function () {
        $(this).fadeIn();
      }).attr('src', src).attr('title', title).attr('alt', title);


    },

    scrollStarted: function(){
      console.log('scrollStarted:' + (self.scrollContinuousIntervalID != undefined && self.scrollContinuousIntervalID != 'undefined' && self.scrollContinuousIntervalID != -1))
      return self.scrollContinuousIntervalID != undefined && self.scrollContinuousIntervalID != 'undefined' && self.scrollContinuousIntervalID != -1;
    },

    scrollContinuousStart: function (scrollFunc) {
      var self = this;
      
      if(self.scrollStarted())
        return;
      console.log('*****starting new scroll self.scrollContinuousIntervalID = ' + self.scrollContinuousIntervalID);
      self.scrollContinuousIntervalID = 1111111;
      self.scrollContinuousIntervalID = setInterval(scrollFunc, 30)
      //scrollFunc();
    },

    scrollContinuousStop: function () {
      console.log('*****scrollContinuousStop');
      var self = this;
      window.clearInterval(self.scrollContinuousIntervalID);
      self.scrollContinuousIntervalID = -1;
    },

    normalizeDelta: function (delta) {
      return delta > 0 ? -43 : 43;
    },

    scrollDown: function () {
      var thumbnailsContainer = jQuery('#stoa-navbar-thumbnails-container');
      var nCurrentScroll = thumbnailsContainer.scrollTop();
      var nContentHeight = parseInt(jQuery('#stoa-navbar-thumbnails-list').css('height').replace('px', ''));
      var nContainerHeight = parseInt(thumbnailsContainer.css('height').replace('px', ''));
      var nMaxScroll = nContentHeight - nContainerHeight;
      var nAdditionalScrollSize = 10;
      if (nCurrentScroll >= nMaxScroll) return;
//      console.log('in scrollDown');
//      console.log('nCurrentScroll: ' + nCurrentScroll) 
//      console.log('nAdditionalScrollSize: ' + nAdditionalScrollSize) 
//      console.log('nMaxScroll: ' + nMaxScroll) 
//      console.log('*************************************')
      

      
      if ((nCurrentScroll + nAdditionalScrollSize) > nMaxScroll) nAdditionalScrollSize = nMaxScroll - nCurrentScroll;
      
      
      thumbnailsContainer.scrollTop(nCurrentScroll + nAdditionalScrollSize);
    },

    scrollUp: function () {

      var thumbnailsContainer = jQuery('#stoa-navbar-thumbnails-container');
      var nCurrentScroll = thumbnailsContainer.scrollTop();
      var nAdditionalScrollSize = 15;
      if (nCurrentScroll <= 0) return;
      else if ((nCurrentScroll - nAdditionalScrollSize) < 0) nAdditionalScrollSize = nCurrentScroll;

//      console.log('in scrollDown');
//      console.log('nCurrentScroll: ' + nCurrentScroll) 
//      console.log('nAdditionalScrollSize: ' + nAdditionalScrollSize) 
//      console.log('*************************************')
      thumbnailsContainer.scrollTop(nCurrentScroll - nAdditionalScrollSize);
    },

    scrollDelta: function (scrollDeltaInPixels) {
      if (scrollDeltaInPixels == 0) return;
      var thumbnailsContainer = jQuery('#stoa-navbar-thumbnails-container');
      var nCurrentScroll = thumbnailsContainer.scrollTop();
      thumbnailsContainer.scrollTop(nCurrentScroll + scrollDeltaInPixels);
    },

    scrollDownEase: function () {
      var thumbnailsTableContainer = jQuery('#ThumbnailsTableContainer');
      var nCurrentScroll = thumbnailsTableContainer.scrollTop();
      var nContentHeight = parseInt(jQuery('#ThumbnailsTable').css('height').replace('px', ''));
      var nContainerHeight = parseInt(thumbnailsTableContainer.css('height').replace('px', ''));
      var nMaxScroll = nContentHeight - nContainerHeight;
      var nAdditionalScrollSize = 15;

      if (nCurrentScroll >= nMaxScroll) return;
      if ((nCurrentScroll + nAdditionalScrollSize) > nMaxScroll) nAdditionalScrollSize = nMaxScroll - nCurrentScroll;
      thumbnailsTableContainer.animate({
        scrollTop: nCurrentScroll + nAdditionalScrollSize
      }, 200);
    },

    thumbnailsOpacityHoverEffect: function () {
      var self = this;
      if (!self.options.thumbnailsOpacityHoverEffect) return;
      $('#stoa-navbar-thumbnails-container').find('img').each(function () {

        self.bindHoverEffect(this);
      });
    },

    unbindHoverEffect: function (element) {
      $(element).unbind('mouseover');
      $(element).unbind('mouseout');
    },

    bindHoverEffect: function (element) {
      $(element).css("opacity", "0.7");
      $(element).bind('mouseover', function () {
        //$(this).parents('#stoa-navbar-thumbnails-container').find('img').not(this).animate({ "opacity": "0.3" }, 200);
        $(element).animate({
          "opacity": "1"
        }, 200);
      });
      $(element).bind('mouseout', function () {
        $(element).animate({
          "opacity": "0.7"
        }, 200);
      });
    },

    createHTML_initDOMStracture: function () {
      var self = this;
      self.element.addClass('stoa');
      self.element.append('<div class="stoa-navbar">' + '  <div id="stoa-navbar-thumbnails-container" class="stoa-navbar-thumbnails-container">' + '  </div>' + '  <div class="stoa-navbar-controllers">' + '    <a id="stoa-navbar-scroller-up" title="' + self.options.scrollerUpText + '"  class="stoa-navbar-scroller-up FadeOnHover">▲</a>' + '    <a id="stoa-navbar-controllers-right" title="' + self.options.rightButtonText + '" class="stoa-navbar-controllers-right FadeOnHover">►</a>&nbsp;&nbsp;&nbsp;' + '    <a id="stoa-navbar-controllers-left" title="' + self.options.leftButtonText + '" class="stoa-navbar-controllers-left FadeOnHover">◄</a>' + '    <a id="stoa-navbar-scroller-down" title="' + self.options.scrollerDownText + '" class="stoa-navbar-scroller-down FadeOnHover">▼</a>' + '  </div>' + '</div>' + '<div id="stoa-main" class="stoa-main">' + '  <img id="stoa-main-image" class="stoa-main-image" src="/Images/1.jpg" runat="server" />' + '</div>' + '<div style="clear:both;"></div>');
    },

    createHTML_ThumbnailsWithFolderName: function () {
      var self = this;
      var thumbnails = $('<ul id="stoa-navbar-thumbnails-list"  />');
      var nNumberOfRows = self.getNumberOfRows(self.options.numberOfThumbnails);
      for (var r = 0; r <= nNumberOfRows; r++) {
        var row = $('<li><ul>');
        for (var c = 1; c <= 2; c++) {
          var thumbnailImgSrc = self.options.thumbnailsFolderName + '/Thumbnails/' + ((r * 2) + c) + '.jpg';
          var imgSrc = thumbnailImgSrc.replace('/Thumbnails', '');
          var img = self.createHTML_ThumbnailImg(thumbnailImgSrc, imgSrc, '');
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

    createHTML_ThumbnailsFromMarkup: function () {
      var self = this;
      var thumbnails = $('<ul id="stoa-navbar-thumbnails-list"  />');
      var images = self.element.children('img,a');
      for (var i = 0; i < images.length; i = i + 2) {
        var row = $('<li><ul>');
        var img1 = self.createThumbnailImgFromDomElement(images[i]);
        var img2 = self.createThumbnailImgFromDomElement(images[i + 1]);
        var thumbnailContainer = $('<li class="stoa-navbar-thumbnail-container" >');
        thumbnailContainer.append(img1);
        thumbnailContainer.append(img2);
        row.find('ul').append(thumbnailContainer);
        row.appendTo(thumbnails);
        $(images[i]).remove();
        $(images[i + 1]).remove();
      }

      var thumbnailsContainer = $('#stoa-navbar-thumbnails-container');
      thumbnailsContainer.empty();
      thumbnails.appendTo(thumbnailsContainer);

      //select first thumbnail as DisplayedImage
      $('#stoa-navbar-thumbnails-list img:first').trigger('click')
    },

    createHTML_ThumbnailImg: function (thumbnailSrc, imgSrc, imgTitle) {
      var self = this;
      var newImg = $('<img class="stoa-navbar-thumbnail-image" id="thumbnail-' + thumbnailSrc + '" src="' + thumbnailSrc + '" />');
      newImg.attr('imgSrc', imgSrc);
      if (imgTitle != null) newImg.attr('title', imgTitle).attr('alt', imgTitle);


      newImg.click(function (event) {
        self.thumbnailClicked(event)
      });
      return newImg;
    },

  });

  $.fn.exists = function () {
   return this.length !== 0;
  }
})(jQuery);

