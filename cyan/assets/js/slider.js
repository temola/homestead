

/*
  Jessica Landgrebe
  ICT4510 Advanced Web Design and Site Management
  Final Website
  May 25, 2018
  Carousel and Image Modal on homepage
*/

/******** Carousel ***********/

$('.clickr').click(function(){
  $('#nav ul').slideToggle(300);
});

    $(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });


    //Image modal gallery

    $(function() {
      $('.img-wrapper > div').click(function() {
        var body = $('body');
        var elem = $(this),
          pos = elem.position(),
          width = elem.outerWidth(),
          height = elem.outerHeight();

        var newElem = elem.clone()
          .css({
            'width': width,
            'height': height,
            'top': pos.top - $(window).scrollTop(),
            'left': pos.left,
            'right': pos.left + width
          })
          .addClass('zoom-img')
          .appendTo(body);
        newElem.css('opacity');
        newElem.addClass('zoom');
      });

      $('body').on('click', '.zoom-img', function() {
        var elem = $(this);
        elem.removeClass('zoom');
        setTimeout(function() {
          elem.remove();
        }, 300);
      });
    });
