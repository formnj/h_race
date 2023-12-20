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
        },{
            depth:['','생체인증','',''],
            id:'app-signin-005-1', status:'com',
            type:'modal', note:'모달',
            sDate:'', eDate:'2023-12-19'
        },

        {
            depth:['회원가입','메인','',''],
            id:'app-signin-000', status:'com',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-18'
        },{
            depth:['','본인인증','기본정보입력',''],
            id:'app-signin-001', status:'com',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-18'
        },{
            depth:['','간편비밀번호설정','',''],
            id:'app-signin-004', status:'com',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-18'
        },{
            depth:['','생체인증사용설정','',''],
            id:'app-signin-005', status:'com',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-19'
        },{
            depth:['','가입완료','',''],
            id:'app-signin-006', status:'com',
            note:'',
            sDate:'2023-12-19', eDate:'2023-12-19'
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
        },
        
        {
            depth:['메인','','',''],
            id:'app-main-001', status:'',
            note:'',
            sDate:'', eDate:''
        },
        
        {
            depth:['계좌관리','증권계좌개설','증권계좌 개설안내',''],
            id:'app-account-001', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','계좌보유여부확인','계좌보유'],
            id:'app-account-002', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','계좌미보유'],
            id:'app-account-003', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','계좌개설 시작','개설시 약관동의'],
            id:'app-account-004', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','기본정보입력'],
            id:'app-account-005', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','신분증촬영'],
            id:'app-account-006', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','직업정보입력/거래정보입력'],
            id:'app-account-007', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','계좌비밀번호등록(4자리)'],
            id:'app-account-008', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','입금졔좌연결'],
            id:'app-account-009', status:'',
            note:'연결계좌입력 / 1원송금확인',
            sDate:'', eDate:''
        },{
            depth:['','','','계좌개설 완료화면'],
            id:'app-account-010', status:'',
            note:'',
            sDate:'', eDate:''
        },

        {
            depth:['투자성향','투자성향 조사','투자성향 설문안내',''],
            id:'app-survay-001', status:'com',
            note:'',
            sDate:'2023-12-19', eDate:'2023-12-19'
        },{
            depth:['','','투자성향 설문시작','설문1)투자희망/정보제공'],
            id:'app-survay-002', status:'com',
            note:'',
            sDate:'2023-12-19', eDate:'2023-12-19'
        },{
            depth:['','','','설문2)설문항목답변(9가지)'],
            id:'app-survay-003-1', status:'com',
            note:'app-survay-003-1 ~ 10 (스텝별 페이지 추가)',
            sDate:'2023-12-20', eDate:'2023-12-20'
        },{
            depth:['','','투자성향 제출하기','투자성향 설문 확인서 확인/제출'],
            id:'app-survay-004', status:'com',
            note:'',
            sDate:'2023-12-20', eDate:'2023-12-20'
        },{
            depth:['','','','확인완료 내역 본인확인(간편비밀번호or지문인증)'],
            id:'app-survay-005', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','투자성상품거래확인서(설문결과서)'],
            id:'app-survay-006', status:'ing',
            type:'modal', note:'',
            sDate:'2023-12-20', eDate:'2023-12-21'
        }
        
        // {
        //     depth:['','','',''],
        //     id:'', status:'',
        //     note:'',
        //     sDate:'', eDate:''
        // }
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
        +   '<td class="ac '+page_arry[i].status+'"><a href="./'+path+'/'+page_arry[i].id+'.html" target="_blank" class="'+page_arry[i].type+'">'+page_arry[i].id+'</a></td>'
        +   '<td class="'+page_arry[i].status+'">'+page_arry[i].note+'</td>'
        +   '<td class="ac '+page_arry[i].status+'">'+page_arry[i].sDate+'</td>'
        +   '<td class="ac '+page_arry[i].status+'">'+page_arry[i].eDate+'</td>'
        +'</tr>');
    }
});