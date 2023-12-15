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
});

/* modal */
const modal = {
    open: (_content,_type) => {    
        $.ajax({
            url:'../modal/'+_content+'.html',
            method:'get',
            success: function(data){
                $('#modal_wrap').find('.modal_container').html(data);
                $('#modal_wrap').addClass('active').find('.modal_container').attr('modal-type', _type);
            },
            complete: function(data){
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
    }
}