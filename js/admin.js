$(document).ready(function(){
    /* 임시 include */
    $('header').html(`<!-- quick -->
    <ul class="quick">
        <li class="user">
            <a href="#none">{이름}</a>님 오늘도 좋은하루되세요.
        </li>
        <li class="timer">마지막 로그인 일시 : 2023-12-23 12:53:59</li>
        <li class="btnSection">
            <button>정보수정</button>
            <button>로그아웃</button>
        </li>
    </ul>
    <!-- //quick -->
    <nav>
        <h1><a href="/">BI</a> STO운영시스템</h1>
        <div>
            <dl>
                <dt class="depth_1"><a href="#none">회원 관리</a></dt>
                <dt class="depth_1"><a href="#none">기준정보 관리</a></dt>
                <dt class="depth_1"><a href="#none">경주마 관리</a></dt>
                <dt class="depth_1"><a href="#none">청약상품 관리</a></dt>
                <dt class="depth_1"><a href="#none">청약/해지 관리</a></dt>
                <dt class="depth_1"><a href="#none">매각/청산 관리</a></dt>
                <dt class="depth_1"><a href="#none">마케팅 관리</a></dt>
                <dt class="depth_1"><a href="#none">운영 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">운영자 관리</a></li>
                        <li><a href="#none">코드 관리</a></li>
                        <li><a href="#none">메뉴 관리</a></li>
                        <li><a href="#none">권한 관리</a></li>
                    </ul>
                </dd>
            </dl>
        </div>
        <button class="btn_open">Close</button>
    </nav>`);

    /* placeholder */
    $('label[class*="input"]').each(function(){
        placeholder(this);
    });

    /* Nav show / hide */
    $('nav').delegate('.btn_open', 'click',function(){
        if($('#admin_wrap').hasClass('close')){
            $('#admin_wrap').removeClass('close');
        } else {
            $('#admin_wrap').addClass('close');
        }
    });
    /* //Nav show / hide */

    /* header nav */
    $('nav dt').delegate('a', 'click', function() {
        _target = $(this).parent();
        accordion(_target);
    });
    /* //header nav */
});