


$(document).ready(function ()
{
  $('img').each(function ()
  {
    var parent = $(this).parent();
    parent.css('display', 'inline-block');
    parent.css('position', 'relative');

    parent.append($('<img class="btnEdit" src="/Images/icon_edit.png" />'));
  });

  // a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
  //$("#dialog:ui-dialog").dialog("destroy");b
  $('body').append(
    '<div class="demo">' +
  ' <div id="dialog-form" title="עריכת תמונה">' +
  '   <div class="ajax_loader" ><div class="ajax_loader_img">מעדכן</div></div>' +

  '   <form id="file_upload_form" method="post" enctype="multipart/form-data" action="/Arti-Shot/Controls/EditableImage/EditableImageUploader.ashx">' +
  '     <fieldset>' +
  '       <p class="validateTips">תמונה נוכחית</p>' +
  '       <img class="ExistingImgPreview" />' +
  '       <p class="validateTips">יש לבחור את התמונה החדשה</p>' +
  '       <input class="text ui-widget-content ui-corner-all" name="file" id="file" size="27" type="file" /><br />' +
  '       <input class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="submit" name="action" value="Upload" style="display:none;" /><br />' +
  '       <input id="image-path" name="image-path" type="text" value="shalom" style="display:none;" />' +
  '       <iframe id="upload_target" name="upload_target" src="" style="display:none;width: 100px; height: 30px; border: 0px solid #fff;"></iframe>' +
  '     </fieldset>' +
  '   </form>' +
  ' </div>' +
  '</div>');
  var text = $("#text")

  allFields = $([]).add(text);

  $("#dialog-form").dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    draggable: true,
    resizable: false,
    buttons: {
      "שמירה": function ()
      {
        var bValid = true;
        allFields.removeClass("ui-state-error");
        $("#dialog-form").dialog.onsave_callback(text.html());
      },
      'חזרה': function ()
      {
        $(this).dialog("close");
      }
    },
    close: function ()
    {
      allFields.val("").removeClass("ui-state-error");
    }
  });


  $('.btnEdit').each(function ()
  {
    $(this).bind('click', function () { openDialog(this); return false; });
  });
  function openDialog(src)
  {
    $('.ajax_loader').hide();
    $('#image-path').val('');
    $('#file').val('');
    var imagePath = $(src).siblings('img').attr('src')
    $('.ExistingImgPreview').attr('src', imagePath)
    $('#dialog-form').dialog.onsave_callback = function (text)
    {
      $('.ajax_loader').css('top', $("#dialog-form").scrollTop());
      $('.ajax_loader').css('display', 'block');
      $('#image-path').val(imagePath);
      $('.ui-button')[0].click();
      //      $.post("Controls/EditableText/UpdateResource.ashx", { resource: sResourceName, text: text }, function (data)
      //      {
      //        $(src).siblings('.lblText').html(text);
      //        $('.ajax_loader').hide();
      //        $('#dialog-form').dialog("close");
      //      }, 'text');
    }

    $('#text').html($(src).siblings('.lblText').html())

    //    var height = parseInt($(src).siblings('.hdnHeight').val());
    //    $('#text').css('height', height);
    //    height = height > 195 ? height : 195;
    //    $("#dialog-form").dialog({ height: height });

    //    var width = parseInt($(src).siblings('.hdnWidth').val());
    var width = 350;

    //    $('#text').css('width', width - 70);
    $('.ajax_loader').css('left', (width / 2) - 50);
    //    width = width > 350 ? width : 350;
    //    $("#dialog-form").dialog({ width: width });
    document.getElementById('file_upload_form').onsubmit = function ()
    {
      document.getElementById('file_upload_form').target = 'upload_target'; //'upload_target' is the name of the iframe
      //alert(document.getElementById('file_upload_form').target);
    }
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
