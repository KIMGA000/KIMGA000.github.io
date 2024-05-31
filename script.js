$(document).ready(function () {

    // 네비게이션 클릭
    $('.nav-link').click(function (event) {
        // 기본 이벤트 제거
        event.preventDefault();

        // 모든 페이지 숨기기
        $('.page').removeClass('active').hide();

        // 클릭된 페이지 보여주기
        var target = $(this).attr('href'); 
        $(target).addClass('active').show(); 

        // 클릭된 페이지의 글자를 진한 검정으로 바꾸기
        $(this).css({
            'fontWeight': 'bold', 
            'color': 'black' 
        });

        // URL 해시 업데이트 (페이지 이동 없이)
        history.pushState(null, null, target); 
    });

    // URL 해시 기반으로 페이지 보여주기
    function showPageFromHash() {
        var hash = window.location.hash || '#home'; 
        $('.page').removeClass('active').hide(); 
        $(hash).addClass('active').show();
    
        // 현재 페이지 링크의 스타일 변경
        $('.nav[href="' + hash + '"]').css({
            'fontWeight': 'bold', 
            'color': 'black' 
        });

        // 다른 페이지 링크의 스타일 초기화
        $('.nav').not('[href="' + hash + '"]').css({
            'fontWeight': 'normal', 
            'color': 'gray' 
        });
    }

    showPageFromHash(); // 페이지 로드 시 해시 기반으로 페이지 보여주기

    // 브라우저 뒤로가기/앞으로가기 버튼 핸들러
    $(window).on('popstate', function () {
        $('.page').removeClass('active').hide(); 
        showPageFromHash(); 
    });
});
