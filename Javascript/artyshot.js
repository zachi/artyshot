
//google.load("jqueryui", "1.5.2");
jQuery(document).ready(function ()
{
  $('.FadeOnHover').hover(
                function ()
                {
                  $(this).animate({ backgroundColor: '#EAEAEA', color: '#0a3768'}, { queue: false, duration: 500 });
                }, function ()
                {
                  $(this).animate({ backgroundColor: 'White', color: '#4f647c'}, { queue: false, duration: 500 });
                });
});


//var _gaq = _gaq || [];
//_gaq.push(['_setAccount', 'UA-22016740-1']);
//_gaq.push(['_trackPageview']);

//(function ()
//{
//  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//})();


function ChangeVideo(eventElement)
{
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

