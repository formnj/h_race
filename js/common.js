$(document).ready(function(){
    /* 비밀번호 보안키보드 기능 */
    var bul_idx = 0;
    $('.sec_keypad').delegate('button', 'click', function(){
        if($(this).attr('class') == undefined && bul_idx < $('.pass_bullet li').length){
            $('.pass_bullet li').eq(bul_idx).addClass('active');
            bul_idx +=1;

            console.log(bul_idx);
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
    });
});

/* tab */
tab_active('.tab_wrap > ul','click');

/* modal */
const modal = {
    open: (_content,_type) => {
        $.ajax({
            url:'../modal/'+_content+'.html',
            method:'get',
            success: function(data){
                $('#modal_wrap').find('.modal_container').attr('modal-type', _type).html(data);
                $('#modal_wrap').addClass('active').find('.modal_container');
            },
            complete: function(data){
                /* body fixed */
                const body = document.querySelector('body');
                if (!body.getAttribute('scrollY')) {
                    const pageY = window.pageYOffset;

                    body.setAttribute('scrollY', pageY.toString());

                    body.style.overflow = 'hidden';
                    body.style.position = 'fixed';
                    body.style.left = '0px';
                    body.style.right = '0px';
                    body.style.top = `-${pageY}px`;
                }
            },
            error: function(){
                alert('404 Error!');
            }
        });
    },
    close: (e) => {
        e.currentTarget.closest('#modal_wrap').classList.remove('active');
        contain = e.currentTarget.closest('.modal_container')
        contain.removeAttribute('modal-type');
        while (contain.firstChild) { 
            contain.removeChild(contain.firstChild);
        }

        /* body remove fixed */
        $('body').removeAttr('scrolly style');
    }
}

/* Input Form */
function input_btn_chk(e){ // 버튼보이기
    var icon_button = e.closest('.input').querySelector('button')
    if(e.value.length>0){
        icon_button.style.cssText="display:block;"
    }else{
        icon_button.style.cssText="display:none;"
    }    
}

function input_btn_fn(e){ // del 클릭시, input 내용 삭제
    var input = e.closest('.input').querySelector('input');
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
        $(this).siblings('input').focus();
    });
    _target.find('input').focus(function(){
        $(this).siblings('i').hide();
    });
    _target.find('input').blur(function(){
        if($(this).val().length < 1){
            $(this).siblings('i').show();
        }
    });
    if(_target.find('input').val().length > 1){
        _target.find('input').siblings('i').hide();
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
        el.querySelectorAll('a').forEach((el, i) => {
            el.addEventListener(evt, function(){
                const parent_index = Array.from(el.closest('ul').children).indexOf(el.parentNode);
                for(j=0; j<el.closest('ul').childElementCount; j++){
                    el.closest('ul').children[j].classList.remove('current')
                    el.closest('ul').nextElementSibling.children[j].classList.remove('current');
                }
                el.parentNode.classList.add('current');
                el.closest('ul').nextElementSibling.children[i].classList.add('current');
                console.log('aaaa');
            });
        });
    })
}
/* //tab */