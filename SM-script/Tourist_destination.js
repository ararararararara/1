//처음 페이지 진입시 첫번째 리스트인 수생식물학습원 보여줌
$(document).ready(function () {
  // 메뉴탭의 갯수만큼 each문을 실행 e = 인덱스 index = 자신의 인덱스의 개체
  $(".menu-tab").each((e, index) => {
    //제이쿼리 객체로 감싼 index 클릭함수 추가
    $(index).click(function () {
      //#TDInfoList li의 전체를 숨김 처리
      $("#TDInfoList li").hide();
      //제이쿼리 객체로 감싼 #TDInfoList li eq내부함수로 배열 접근 show로 보여줌
      $("#TDInfoList li").eq(e).show();
    });
  });

  // $(".waterPlant").show();
  // $(".ijidang").hide();
  // $(".busodamak").hide();
  // $(".MountainHwan").hide();
  // $(".DaecheongDam").hide();
  // $(".Cheongnamdae").hide();
  // $(".JanggyeTouristSite").hide();

  //각 리스트들마다 누르면 해당 내용물은 보이고
  //나머지리스트들의 내용은 숨김
  // $(".menu-waterPlant").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".waterPlant").show();
  // });

  // $(".menu-ijidang").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".ijidang").show();
  // });

  // $(".menu-busodamak").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".busodamak").show();
  // });

  // $(".menu-MtnHwan").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".MountainHwan").show();
  // });

  // $(".menu-DaecheongDam").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".DaecheongDam").show();
  // });

  // $(".menu-Cheongnamdae").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".Cheongnamdae").show();
  // });

  // $(".menu-JanggyeTouristSite").click(function () {
  //   $("#TDInfoList li").hide();
  //   $(".JanggyeTouristSite").show();
  // });
});
