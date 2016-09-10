$(document).ready(function() {
  $('.link').click(function() {
    var link = $(this).attr("name");
    window.location = link;
  });
  $('.event_header').click(function() {
    var id = "#event"+$(this).attr("id");
    $(id).slideToggle(120);
  });
  var team_height = $('.team_bar').height();
  var team_width = $('.team_bar').width();
  if(team_height != undefined && team_width != undefined) {
    team_height+=10;
    team_height += "px";
    team_width += "px";
    $('#team_img').css({
      'height': team_height,
      'width': team_width
    });
  }
  $('.post_minified').click(function() {
    var post = $(this);
    $('#blog_expand').show();
    $('#content_blog').slideToggle(120);
    var profile = post.find('img.row_1').attr("src");
    $('.poster').attr('src',profile);
    var title = post.find('.post_title').text();
    $('.blog_title').text(title);
    var img_main = post.find('.img_preview').attr("src");
    $('.preview_expand').attr('src', img_main);
    var dim = (($("#content_blog").width() - $('.preview_expand').width())/2)+"px";
    $('.preview_expand').css({
      'margin-left': dim
    });
    $('.post_full').text($('.post_text_full').text());
    $('.blog_date').text(post.find('.date').text());
  });


  $('.cl:not(#content_blog)').click(function() {
    $('#blog_expand').hide();
    $('#content_blog').slideToggle(120);
  });

  $('.event_photos').each(function() {
    if($(this).text().length != "") {
      $(this).text("Photos: " + $(this).text());
    } else {
      $(this).remove();
    }
  });

  $(document).keyup(function(event) {
    if(event.which == 27) {
      if($('#blog_expand').css('display') == 'block') {
        $('#blog_expand').hide();
        $('#content_blog').slideToggle(120);
      }
    }
  });
});
