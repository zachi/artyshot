

$(function () {
  // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
  //$("#dialog:ui-dialog").dialog("destroy");b
  $('body').append(
  '<div class="demo">' +
  ' <div id="dialog-form" title="עריכת טקסט">' +
  '   <div class="ajax_loader" ><div class="ajax_loader_img">מעדכן</div></div>' +
  '   <p class="validateTips">' +
  '     יש למלא את הטקסט הרצוי</p>' +
  '   <form>' +
  '   <fieldset>' +
  '     <div contenteditable="true" name="text" id="text" class="text ui-widget-content ui-corner-all" />' +
  '   </fieldset>' +
  '   </form>' +
  ' </div>' +
  '</div>');
  var text = $("#text")

  allFields = $([]).add(text);

  $("#dialog-form").dialog({
    autoOpen: false,
    height: 195,
    width: 350,
    modal: true,
    draggable: true,
    resizable: false,
    buttons: {
      "שמירה": function () {
        var bValid = true;
        allFields.removeClass("ui-state-error");
        $("#dialog-form").dialog.onsave_callback(text.html());
      },
      'חזרה': function () {
        $(this).dialog("close");
      }
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
    }
  });


  $('.btnEdit').each(function () {
    $(this).bind('click', function () { openDialog(this); return false; });
  });
  function openDialog(src) {

    $('#dialog-form').dialog.onsave_callback = function (text) {
      $('.ajax_loader').css('top', $("#dialog-form").scrollTop());
      $('.ajax_loader').css('display', 'block');
      var sResourceName = $(src).siblings('.hdnResourceName').val()

      $.post("Controls/EditableText/UpdateResource.ashx", { resource: sResourceName, text: text }, function (data) {
        $(src).siblings('.lblText').html(text);
        $('.ajax_loader').hide();
        $('#dialog-form').dialog("close");
      }, 'text');
    }

    $('#text').html($(src).siblings('.lblText').html())

    var height = parseInt($(src).siblings('.hdnHeight').val());
    $('#text').css('height', height);
    height = height > 195 ? height : 195;
    $("#dialog-form").dialog({ height: height });

    var width = parseInt($(src).siblings('.hdnWidth').val());

    $('#text').css('width', width - 70);
    $('.ajax_loader').css('left', (width / 2) - 50);
    width = width > 350 ? width : 350;
    $("#dialog-form").dialog({ width: width });
    $('#dialog-form').dialog('open')

   
  }
  //  function GetEventSource(e) {
  //    if (!e)
  //      return window.event.src;
  //    return e.currentTarget;

  //  }
  //  function CancelEventBubling(e) {

  //    if (!e)
  //      e = window.event;

  //    if (e.cancelBubble != undefined)
  //      e.cancelBubble = true;
  //    else
  //      e.stopPropagation();
  //  }
});
