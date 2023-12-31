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
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">회원리스트</a></li>
                        <li><a href="#none">탈퇴회원</a></li>
                        <li><a href="#none">블랙리스트</a></li>
                        <li><a href="#none">투자자격심사</a></li>
                    </ul>
                </dd>

                <dt class="depth_1"><a href="#none">기준정보 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">기준정보 조회</a></li>
                        <li><a href="#none">기준정보 등록</a></li>
                    </ul>
                </dd>

                <dt class="depth_1"><a href="#none">경주마 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">목장조회</a></li>
                        <li><a href="#none">경주마조회</a></li>
                        <li><a href="#none">관리정보조회</a></li>
                    </ul>
                </dd>

                <dt class="depth_1"><a href="#none">청약상품 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">청약상품 조회</a></li>
                        <li><a href="#none">청약상품 등록</a></li>
                    </ul>
                </dd>

                <dt class="depth_1"><a href="#none">청약/해지 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">청약신청 현황</a></li>
                        <li><a href="#none">청약마감 현황</a></li>
                        <li><a href="#none">청약배분 현황</a></li>
                    </ul>
                </dd>

                <dt class="depth_1"><a href="#none">매각/청산 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">투표관리</a></li>
                        <li><a href="#none">매각/청산내역</a></li>
                    </ul>
                </dd>

                <dt class="depth_1"><a href="#none">마케팅 관리</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="#none">공지/공시 관리</a></li>
                        <li><a href="#none">FAQ 관리</a></li>
                        <li><a href="#none">1:1문의 관리</a></li>
                        <li><a href="#none">이벤트/배너 관리</a></li>
                        <li><a href="#none">이벤트/배너 페이지</a></li>
                        <li><a href="#none">아이콘메뉴 관리</a></li>
                        <li><a href="#none">이용약관관리</a></li>
                    </ul>
                </dd>

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

    $('.accordion').delegate('> dt', 'click', function() {
        accordion(this);
    });
});