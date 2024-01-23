$(document).ready(function(){
    /* 비밀번호 보안키보드 기능 */
    var bul_idx = 0;
    $('.sec_keypad').delegate('button', 'click', function(){
        if($(this).attr('class') == undefined && bul_idx < $('.pass_bullet li').length){
            $('.pass_bullet li').eq(bul_idx).addClass('active');
            bul_idx +=1;

            if(bul_idx == 6){
                modal.open('app-password-002-1', 'type_bottom');
            }
        }

        /* 선택번호 삭제 시 */
        if($(this).hasClass('icon_del') && bul_idx > 0){
            bul_idx -=1;
            $('.pass_bullet li').eq(bul_idx).removeClass('active');
        }

        /* 선택번호 리셋 */
        if($(this).hasClass('icon_reset')){
            $('.pass_bullet li').removeClass('active');
            bul_idx = 0;
        }        
    });

    /* placeholder */
    $('label[class*="input"]').each(function(){
        placeholder(this);

        $(this).find('input, textarea').keyup(function(){
            input_btn_chk(this);
        })
    });

    /* resize check */
    var init_width = $(window).width(),
    change_size,
    i=0,
    j=0;
    var resize_chk = setTimeout(function(){
        change_size = $(window).width();
        if(init_width != change_size){
            $('.tab_wrap ul.tab_type_slide').unbind('touchstart');
            $('.tab_wrap ul.tab_type_slide').unbind('touchmove');
            $('.tab_wrap ul.tab_type_slide').unbind('touchend');
        } else {

            /* slide tab */
            var slide_tab_target = $('.tab_wrap').find('ul.tab_type_slide');

            $('.tab_wrap .tab_type_slide li > *').click(function(){
                $('.tab_wrap .tab_type_slide li').removeClass('current');
                $(this).parent().addClass('current');

                if($('.tab_wrap ul.tab_type_slide').width() > $('.tab_wrap.type_slide').width()){
                    /* 선택된 탭 중앙 배치 */
                    var ul_pos = slide_tab_target.css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
                    var move_pos = Math.abs((($(this).closest('div').width() * 0.5) - $(this).parent().offset().left));

                    j = i - ul_pos;
                    if($(this).parent().offset().left > ($(this).closest('div').width()*0.5)){
                        //i -= move_pos + j;
                        i -= ((move_pos + j) - (slide_tab_target.parent().width() * 0.2));
                    } else {
                        // i += move_pos - j;
                        i += ((move_pos - j) + (slide_tab_target.parent().width() * 0.2));
                    }

                    slide_tab_target.css('transform','translate('+i+'px, 0)');

                    var slide_tab_limit = $('.tab_wrap.type_slide').width() - $('.tab_wrap ul.tab_type_slide').width();
                    if(i >= 0){
                        slide_tab_target.css('transform','translate(0, 0)');
                    }
                    if(i <= slide_tab_limit){
                        slide_tab_target.css('transform','translate('+slide_tab_limit+'px, 0)');
                    }
                }
            });

            /** touch
            터치 발생 시점 : touchstart, mousedown
            움직임 발생 시점 : touchmove, mousemove
            터치 해제 시점 : touchend, mouseup
            **/
            var tab_slide = $('.tab_wrap ul.tab_type_slide');
            var x = 0;
            var tabx = 0;
            var xx = 0;
            var limit = tab_slide.width() - tab_slide.parent().width();
            tab_slide.bind('touchstart', function(e) {
                var event = e.originalEvent;
                x = event.touches[0].screenX;
                tabx = tab_slide.css("transform").replace(/[^0-9\-.,]/g, '').split(',')[4];
            });
            tab_slide.bind('touchmove', function(e) {
                var event = e.originalEvent;
                xx = parseInt(tabx) + parseInt(event.touches[0].screenX - x);
                tab_slide.css("transform", "translate(" + xx + "px, 0px)");
                event.preventDefault();
            });
            tab_slide.bind('touchend', function(e) {
                // if ((xx > 0) || (tabx < 0)) {
                if (xx > 0) {
                    tab_slide.css("transform", "translate(0px, 0px)");
                }
                if (Math.abs(xx) > limit) {
                    tab_slide.css("transform", "translate(" + -limit + "px, 0px)");
                }

                slide_tab_navi_pos = xx;
            });

        }
    }, 300);
});

$(document).delegate('body','click', function(){
    $('.select_form dl').removeClass('active');
    $('.select_form ul').slideUp();
});

/* tab */
tab_active('.tab_wrap > ul','click');

$('.accordion').delegate('> dt', 'click', function() {
    accordion(this);
});

$('.select_form').delegate('a','click',function(e) {
    select_ctrl(this);
    e.stopPropagation();
});
$('.select_form').delegate('select','change',function() {
    select_change(this);
});

/* modal */
const modal = {
    open: (_content,_type) => {
        $('.modal_wrap.'+_content).addClass('active').find('.modal_container').attr('modal-type', _type);
        disableScroll();
        // $.ajax({
        //     url:'../modal/'+_content+'.html',
        //     method:'get',
        //     success: function(data){
        //         $('#modal_wrap').find('.modal_container').attr('modal-type', _type).html(data);
        //         $('#modal_wrap').addClass('active').find('.modal_container');
        //     },
        //     complete: function(data){
        //         disableScroll();
        //     },
        //     error: function(){
        //         alert('404 Error!');
        //     }
        // });
    },
    close: (e) => {
        e.currentTarget.closest('.modal_wrap').classList.remove('active');
        contain = e.currentTarget.closest('.modal_container')
        contain.removeAttribute('modal-type');
        // while (contain.firstChild) { 
        //     contain.removeChild(contain.firstChild);
        // }

        $("html").css({
            height: "initial",
            overflow: "initial",
        });

        enableScroll();
    }
}

/* Input Form Edit 2024-01-23 */
function input_btn_chk(e){ // 버튼보이기
    var icon_button = e.closest('.input, .input_square').querySelector('button');
    if(icon_button != null){
        if(e.value.length>0){
            icon_button.style.cssText="display:block;"
        }else{
            icon_button.style.cssText="display:none;"
        }
    }
}

function input_btn_fn(e){ // del 클릭시, input 내용 삭제
    var input = e.closest('.input, .input_square').querySelector('input, textarea');
    input.value = null;
    e.style.display="none";
    e.parentNode.querySelector('i').style.display="block";
}

function input_btn_chg(){
    var icon_pss = document.querySelector('button.icon_pss')
    var input_password = document.querySelector('input.password')
    icon_pss.classList.toggle('active');
    if(icon_pss.classList.contains('active')){
        
        input_password.setAttribute('type', 'text');
    }else{
        input_password.setAttribute('type', 'password');
    }
}

/* input focus */
function placeholder(_target){
    _target = $(_target);
    _target.find('i').click(function(){
        $(this).hide();
        $(this).siblings('input, textarea').focus();
    });
    _target.find('input, textarea').focus(function(){
        $(this).siblings('i').hide();
    });
    _target.find('input, textarea').blur(function(){
        if($(this).val().length < 1){
            $(this).siblings('i').show();
        }
    });
    if(_target.find('input, textarea').val().length > 1){
        _target.find('input, textarea').siblings('i').hide();
    }
}

/* timer */
function timer(element, seconds){
    var element, endTime, hours, mins, msLeft, time;

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 0) {
            console.log('done');
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + ('0' + mins).slice(-2) : mins) + ':' + ('0' + time.getUTCSeconds()).slice(-2);
            setTimeout(updateTimer, time.getUTCMilliseconds());
        }
    }

    element = document.querySelector(element);
    endTime = (+new Date) + 1000 * seconds;
    updateTimer();
}

/* tab */
function tab_active(_target, evt) {//_target : 대상 / evt : 핸들러
    var evt,
    tab = document.querySelectorAll(_target);
    
    tab.forEach(el => {
        if(el.classList.contains('demo')){// 탭버튼에만 current 효과 줄 때
            el.querySelectorAll('button').forEach((el, i) => {
                el.addEventListener(evt, function(){
                    const parent_index = Array.from(el.closest('ul').children).indexOf(el.parentNode);
                    for(j=0; j<el.closest('ul').childElementCount; j++){
                        el.closest('ul').children[j].classList.remove('current');
                    }
                    el.parentNode.classList.add('current');
                });
            });
        } else {
            el.querySelectorAll('button').forEach((el, i) => {
                el.addEventListener(evt, function(){
                    const parent_index = Array.from(el.closest('ul').children).indexOf(el.parentNode);
                    for(j=0; j<el.closest('ul').childElementCount; j++){
                        el.closest('ul').children[j].classList.remove('current');
                        el.closest('.tab_wrap').querySelector('.tab_content').children[j].classList.remove('current');
                    }
                    el.parentNode.classList.add('current');
                    el.closest('.tab_wrap').querySelector('.tab_content').children[i].classList.add('current');
                });
            });
        }
    })
}
/* //tab */

/* accordion */
function accordion(_target) {
    var _target = $(_target);
    _target.closest('dl').hasClass('single') ? // 하나만 오픈
    (
        _target.hasClass('active') ?
        (
            _target.next('dd').stop().slideUp(),
            _target.removeClass('active')
        ) : (
            _target.addClass('active'),
            _target.siblings().removeClass('active'),
            _target.closest('dl').children('dd').stop().slideUp(),
            _target.next('dd').stop().slideDown()
        )
    ) : ( // 각각 제어
        _target.hasClass('active') ?
        (
            _target.next('dd').stop().slideUp(),
            _target.removeClass('active')
        ) : (
            _target.addClass('active'),
            _target.next('dd').stop().slideDown()
        )
    )
}

function select_ctrl(_target) {
    var _target = $(_target);
    var select_baseline = _target.closest('dl').find('ul').outerHeight() + _target.closest('dl').offset().top + 40;

    if (_target.parent()[0].nodeName == 'DT' && !_target.closest('dl').hasClass('active')) {
        _target.closest('dl').addClass('active');
        _target.closest('dl').find('ul').stop().slideDown();
    } else {
        _target.closest('dl').removeClass('active').find('dt a').text(_target.text());
        _target.closest('dl').find('ul').stop().slideUp();
        _target.closest('.select_form').find('option').prop('selected', false);
        _target.closest('.select_form').find('option').eq(_target.parent().index()).prop('selected', true);
    }
}

function select_change(_target) {
    var _target = $(_target);
    _target.closest('.select_form').find('dt a').text(_target.children('option:selected').text());
}

/* 2024-01-09 : 추가 */
// body lock scroll ios 대응
function lockScrollHandle(event) {
    const e = event || window.event;

    // body lock 에서 제외시킬 요소 정의
    // 모달 공통
    if (e.target.classList.contains("modal_content")) {
        return;
    }
    if (e.target.closest(".modal_content")) {
        return;
    }

    // 멀티 터치는 터치 되게 한다
    if (e.touches.length > 1) return;

    // event 초기화 속성이 있음 초기화
    e.preventDefault();
}

// 스크롤 잠금
function disableScroll() {
    const body = document.querySelector("body");
    const pageY = document.body.scrollTop || document.documentElement.scrollTop;

    if (!body.hasAttribute("scrollY")) {
        body.setAttribute("scrollY", String(pageY));
        $(body).addClass("lockbody");
    }
    body.addEventListener("touchmove", lockScrollHandle, { passive: false });
}

// 스크롤 잠금 해제
function enableScroll() {
    const body = document.querySelector("body");

    if (body.hasAttribute("scrollY")) {
        $(body).removeClass("lockbody");
        body.scrollTop = Number(body.getAttribute("scrollY"));
        body.removeAttribute("scrollY");
    }

    body.removeEventListener("touchmove", lockScrollHandle, { passive: true });
}
/* //2024-01-09 : 추가 */