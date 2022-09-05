// index 헤더 메뉴
$(function () {
  $('.navigation #gnb > .gnb_ali').hover(function () {
      $(this).find('.gnb_bul').stop().slideDown();
  }, function () {
      $(this).find('.gnb_bul').stop().slideUp();
  });
});

// bobea 중고차 게시판 버튼클릭시 게시판이미지변경
