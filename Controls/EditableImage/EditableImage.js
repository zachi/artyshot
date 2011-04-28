
$(document).ready(function ()
{
  $('head').append($('<link rel="Stylesheet" type="text/css" href="/Controls/EditableImage/EditableImage.css" />'))
  $('img').each(function ()
  {
    if ($(this).is('.btnEdit'))
      return;
    var parent = $(this).parent();
    if (parent.css('display') != 'block')
      parent.css('display', 'inline-block');
    parent.css('position', 'relative');
    var btnEdit = $('<img class="btnEditImg" src="/Images/icon_edit.png" />');
    btnEdit.bind('click', function () { openDialog(this); return false; });
    parent.append(btnEdit);
  });

  $('body').append(
  '<div>' +
  ' <div id="dialog-form" class="editable-image" title="עריכת תמונה">' +
  '   <div class="ajax_loader ajax_loader_left" >' +
  '    <div class="ajax_loader_img">מעדכן</div>' +
  '   </div>' +
  '   <form id="file_upload_form" method="post" target="upload_target" enctype="multipart/form-data" action="/Arti-Shot/Controls/EditableImage/EditableImageUploader.ashx">' +
  '     <fieldset>' +
  '       <p class="validateTips">תמונה נוכחית (רזולוציה <span id="ExistingImgResolution" />)</p>' +
  '       <img class="ExistingImgPreview" />' +
  '       <p class="validateTips">יש לבחור את התמונה החדשה</p>' +
  '       <input class="text ui-widget-content ui-corner-all" name="file" id="file" size="27" type="file" /><br />' +
  '       <input id="submitImgFile" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" type="submit" name="action" value="Upload" style="display:none;" /><br />' +
  '       <input id="image-path" name="image-path" type="text" value="shalom" style="display:none;" />' +
  '       <iframe id="upload_target" name="upload_target" src="" style="display:none;"></iframe>' +
  '     </fieldset>' +
  '   </form>' +
  ' </div>' +
  '</div>');

  $("#dialog-form.editable-image").dialog({
    autoOpen: false,
    height: 300,
    width: 350,
    modal: true,
    draggable: true,
    resizable: false,
    buttons: {
      "שמירה": function ()
      {
        $("#dialog-form.editable-image").dialog.onsave_callback();
      },
      'חזרה': function ()
      {
        $(this).dialog("close");
      }
    }
  });

  function openDialog(src)
  {
    $('.ajax_loader').hide();
    $('#image-path').val('');
    $('#file').val('');
    var image = $(src).siblings('img');
    var imagePath = image.attr('src');
    if (imagePath.indexOf('?') != -1)
      imagePath = imagePath.substr(0, imagePath.indexOf('?'));
    $('.ExistingImgPreview').attr('src', imagePath)
    $('#ExistingImgResolution').text(image.width() + 'X' + image.height());
    $('#dialog-form.editable-image').dialog.onsave_callback = function ()
    {
      $('.ajax_loader').css('top', $("#dialog-form.editable-image").scrollTop());
      $('.ajax_loader').css('display', 'block');
      $('#image-path').val(imagePath);
      $('#upload_target').load(function ()
      {
        $('.ajax_loader').hide();
        image.attr('src', imagePath + '?' + Math.random());
        $('#dialog-form.editable-image').dialog("close");
      })
      $('#submitImgFile')[0].click();
    }
    $("#dialog-form.editable-image").dialog('open')
  }

});
