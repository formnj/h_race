$(document).ready(function(){
    var page_arry = [
        {
            depth:['모달','간편비밃너호 설정 완료','',''],
            id:'app-password-002-1', status:'',
            type:'modal', note:'모달',
        },{
            depth:['','약관 동의','',''],
            id:'app-signin-002', status:'',
            type:'modal', note:'모달',
        },{
            depth:['','인증번호 입력','',''],
            id:'app-signin-003', status:'',
            type:'modal', note:'모달',
        },

        {
            depth:['회원가입','본인인증','',''],
            id:'', status:'',
            note:'',
        },
        {
            depth:['','휴대폰본인인증','',''],
            id:'', status:'',
            note:'',
        },{
            depth:['','간편비밀번호설정','',''],
            id:'', status:'',
            note:'',
        },{
            depth:['','생체인증사용설정','',''],
            id:'', status:'',
            note:'',
        },
        {
            depth:['','DID발급/가입완료','',''],
            id:'', status:'',
            note:'',
        },

        {
            depth:['로그인','간편비밀번호','',''],
            id:'app-login-001', status:'com',
            note:'',
        },{
            depth:['','본인확인','',''],
            id:'app-password-001', status:'com',
            note:'',
        },{
            depth:['','간편비밀번호','',''],
            id:'app-password-002', status:'com',
            note:'[app-login-001] 로그인-간편비밀번호 타이틀 교체 사용, [modal > app-password-002-1] 포함',
        }
    ];

    var row_chk,
        path;

    for (var i=0; i<page_arry.length;i++) {
        /* row 시작 체크 */
        if(page_arry[i].depth[0].length != 0){
            row_chk = 'row';
        } else {
            row_chk = '';
        }

        /* path */
        if(page_arry[i].type == 'modal'){
            path = 'modal'
        } else {
            path = 'html'
        }

        $('tbody').append('<tr class="'+row_chk+'">'
        +   '<th>'+page_arry[i].depth[0]+'</th>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].depth[1]+'</td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].depth[2]+'</td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].depth[3]+'</td>'
        +   '<td class="ac '+page_arry[i].status+'"><a href="./'+path+'/'+page_arry[i].id+'.html" target="_blank">'+page_arry[i].id+'</a></td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].note+'</td>'
        +'</tr>');
    }
});