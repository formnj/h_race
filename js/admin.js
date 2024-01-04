$(document).ready(function(){
    /* 임시 include */
    $('header').html(`<h1><a href="/">BI</a> Administrator</h1>
    <!-- quick -->
    <ul class="quick">
        <li class="user">
            <a href="#none">{이름}</a>님 오늘도 좋은하루되세요.
        </li>
        <li class="login">
            <button>로그아웃</button>
        </li>
    </ul>
    <!-- //quick -->
    <nav>
        <div>
            <dl>
                <dt class="depth_1"><a href="#none">UI</a></dt>
                <dd class="depth_2">
                    <ul>
                        <li><a href="./board.html">Board</a></li>
                        <li><a href="./tab.html">Tab</a></li>
                        <li><a href="./progress.html">Progress & loading</a></li>
                        <li><a href="./form.html">Form</a></li>
                    </ul>
                </dd>
            </dl>
        </div>
        <button class="btn_open">Close</button>
    </nav>`);

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