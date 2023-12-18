$(document).ready(function(){
    var page_arry = [
        {
            depth:['모달','간편비밃너호 설정 완료','',''],
            id:'app-password-002-1', status:'com',
            type:'modal', note:'모달',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','통신사 선택','',''],
            id:'app-signin-001-1', status:'com',
            type:'modal', note:'모달',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','약관 동의','',''],
            id:'app-signin-002', status:'com',
            type:'modal', note:'모달',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','인증번호 입력','',''],
            id:'app-signin-003', status:'com',
            type:'modal', note:'모달',
            sDate:'', eDate:'2023-12-15'
        },

        {
            depth:['회원가입','간편인증 시작하기','',''],
            id:'app-signin-000', status:'ing',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-18'
        },{
            depth:['','본인인증','기본정보입력',''],
            id:'app-signin-001', status:'com',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-18'
        },
        {
            depth:['','휴대폰본인인증','',''],
            id:'', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','간편비밀번호설정','',''],
            id:'', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','생체인증사용설정','',''],
            id:'', status:'',
            note:'',
            sDate:'', eDate:''
        },
        {
            depth:['','DID발급/가입완료','',''],
            id:'', status:'',
            note:'',
            sDate:'', eDate:''
        },

        {
            depth:['로그인','간편비밀번호','',''],
            id:'app-login-001', status:'com',
            note:'',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','본인확인','',''],
            id:'app-password-001', status:'com',
            note:'약관 동의[modal > app-signin-002], 인증번호 입력[app-signin-003]',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','간편비밀번호','',''],
            id:'app-password-002', status:'com',
            note:'[app-login-001] 로그인-간편비밀번호 타이틀 교체 사용, [modal > app-password-002-1] 포함',
            sDate:'', eDate:'2023-12-15'
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
        +   '<td class="ac '+page_arry[i].status+'">'+page_arry[i].sDate+'</td>'
        +   '<td class="ac '+page_arry[i].status+'">'+page_arry[i].eDate+'</td>'
        +'</tr>');
    }
});