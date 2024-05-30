$(document).ready(function () {

    // header와 footer height 빼고는 contain
    var headerHeight = $('#header').outerHeight();
    var footerHeight = $('#footer').outerHeight();
    $('#contain').css({
        'top': headerHeight + 'px',
        'bottom': footerHeight + 'px'
    });

    // 네비게이션 클릭
    $('.nav-link').click(function (event) {
        // 기본 이벤트 제거
        event.preventDefault();

        // 모든 페이지 숨기기
        $('.page').removeClass('active').hide();

        // 클릭된 페이지 보여주기
        var target = $(this).attr('href'); // 클릭된 링크의 href 속성 값 (예: #home)
        $(target).addClass('active').show(); // 해당 페이지 활성화

        // 클릭된 페이지의 글자를 진한 검정으로 바꾸기
        $(this).css({
            'fontWeight': 'bold', // 진한 글씨로 설정
            'color': 'black' // 검은색으로 설정
        });

        // URL 해시 업데이트 (페이지 이동 없이)
        history.pushState(null, null, target); // 브라우저 히스토리 상태 업데이트
    });

    // URL 해시 기반으로 페이지 보여주기
    function showPageFromHash() {
        var hash = window.location.hash || '#home'; // 현재 URL의 해시 값 또는 기본값 #home
        $('.page').removeClass('active').hide(); // 모든 페이지 숨기기
        $(hash).addClass('active').show(); // 해당 해시의 페이지를 활성화
    
        // 현재 페이지 링크의 스타일 변경
        $('.nav[href="' + hash + '"]').css({
            'fontWeight': 'bold', // 진한 글씨로 설정
            'color': 'black' // 검은색으로 설정
        });

        // 다른 페이지 링크의 스타일 초기화
        $('.nav').not('[href="' + hash + '"]').css({
            'fontWeight': 'normal', // 기본 글씨로 설정
            'color': 'gray' // 회색으로 설정
        });
    }

    showPageFromHash(); // 페이지 로드 시 해시 기반으로 페이지 보여주기

    // 브라우저 뒤로가기/앞으로가기 버튼 핸들러
    $(window).on('popstate', function () {
        $('.page').removeClass('active').hide(); // 모든 페이지 숨기기
        showPageFromHash(); // 해시 값에 따른 페이지 보여주기
    });
});
