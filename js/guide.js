$(document).ready(function(){
    var page_arry = [
        {
            depth:['공통','간편비밃너호 설정 완료','',''],
            id:'app-password-002-1', status:'com',
            type:'modal', note:'',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','통신사 선택','',''],
            id:'app-signin-001-1', status:'com',
            type:'modal', note:'',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','약관 동의','',''],
            id:'app-signin-002', status:'com',
            type:'modal', note:'약관동의 필수/선택 구분<!-- Edit 2024-01-05 : 필수/선택 구분 -->',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','인증번호 입력','',''],
            id:'app-signin-003', status:'com',
            type:'modal', note:'',
            sDate:'', eDate:'2023-12-15'
        },{
            depth:['','생체인증','',''],
            id:'app-signin-005-1', status:'com',
            type:'modal', note:'',
            sDate:'', eDate:'2023-12-19'
        },{
            depth:['','미디어엑세스 허용','',''],
            id:'media_access', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-21', eDate:'2023-12-21'
        },{
            depth:['','주소 검색','',''],
            id:'search_address', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-28', eDate:'2023-12-28'
        },{
            depth:['','은행/증권사 리스트','',''],
            id:'bank', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-29', eDate:'2023-12-29'
        },{
            depth:['','하단 메뉴','',''],
            id:'action_bar', status:'com',
            type:'', note:'',
            sDate:'2024-01-03', eDate:'2024-01-03'
        },{
            depth:['','단순 텍스트 팝업','',''],
            id:'text_modal', status:'com',
            type:'modal', note:'',
            sDate:'2024-01-03', eDate:'2024-01-03'
        },{
            depth:['','알림 설정 팝업','',''],
            id:'alarm_set', status:'com',
            type:'modal', note:'',
            sDate:'2024-01-03', eDate:'2024-01-03'
        },{
            depth:['','알림 설정 확인 팝업','',''],
            id:'alarm_set_comfirm', status:'com',
            type:'modal', note:'',
            sDate:'2024-01-03', eDate:'2024-01-03'
        },{
            depth:['','로딩 팝업','',''],
            id:'preload_modal', status:'com',
            type:'modal', note:'',
            sDate:'2024-01-08', eDate:'2024-01-08'
        },

        {
            depth:['회원가입','메인','',''],
            id:'app-signin-000', status:'com',
            note:'',
            sDate:'2023-12-18', eDate:'2023-12-18'
        },{
            depth:['','본인인증','기본정보입력',''],
            id:'app-signin-001', status:'com',
            note:'주민등록번호 입력 폼 수정<!-- Edit 24-01-05 : password 입력 -->',
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
            id:'app-account-001', status:'com',
            note:'',
            sDate:'2023-12-26', eDate:'2023-12-27'
        },{
            depth:['','','계좌보유여부확인','계좌보유'],
            id:'app-account-002', status:'com',
            note:'팝업방식 수정 완료(24-01-10)',
            sDate:'2023-12-26', eDate:'2023-12-26'
        },{
            depth:['','','','계좌미보유'],
            id:'app-account-003', status:'',
            note:'계좌 보유/미보유 동일 디자인',
            sDate:'', eDate:''
        },{
            depth:['','','계좌개설 시작','개설시 유의사항'],
            id:'app-account-004-0', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-26', eDate:'2023-12-26'
        },{
            depth:['','','계좌개설 시작','개설시 약관동의'],
            id:'app-account-004', status:'com',
            note:'',
            sDate:'2023-12-26', eDate:'2023-12-26'
        },{
            depth:['','','','기본정보입력'],
            id:'app-account-005', status:'com',
            note:'',
            sDate:'2023-12-27', eDate:'2023-12-27'
        },{
            depth:['','','','계좌개설목적'],
            id:'app-account-005-1', status:'com',
            note:'',
            sDate:'2023-12-28', eDate:'2023-12-28'
        },{
            depth:['','','','신분증촬영'],
            id:'app-account-006', status:'com',
            note:'촬영tip',
            sDate:'2023-12-28', eDate:'2023-12-28'
        },{
            depth:['','','','신분증촬영 완료'],
            id:'app-account-006-1', status:'com',
            note:'팝업방식 수정 완료(24-01-10)',
            sDate:'2023-12-28', eDate:'2023-12-28'
        },{
            depth:['','','','신분증진위여부 확인'],
            id:'app-account-006-1-0', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-28', eDate:''
        },{
            depth:['','','','직업정보입력/거래정보입력'],
            id:'app-account-007', status:'com',
            note:'팝업방식 수정 완료(24-01-10)',
            sDate:'2023-12-28', eDate:'2023-12-28'
        },{
            depth:['','','','계좌비밀번호등록(4자리)'],
            id:'app-account-008', status:'com',
            note:'',
            sDate:'2023-12-29', eDate:'2023-12-29'
        },{
            depth:['','','','입금졔좌연결'],
            id:'app-account-009', status:'com',
            note:'연결계좌입력 / 1원송금확인',
            sDate:'2023-12-29', eDate:'2023-12-30'
        },{
            depth:['','','','1원송금'],
            id:'app-account-009-1-1', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-30', eDate:'2023-12-30'
        },{
            depth:['','','','입금졔좌확인'],
            id:'app-account-009-1', status:'com',
            note:'팝업방식 수정 완료(24-01-10)',
            sDate:'2023-12-30', eDate:'2023-12-30'
        },{
            depth:['','','','이체 제한 안내'],
            id:'app-account-009-1-2', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-30', eDate:'2023-12-30'
        },{
            depth:['','','','계좌개설 완료화면'],
            id:'app-account-010', status:'com',
            note:'팝업방식 수정 완료(24-01-10)',
            sDate:'2024-01-02', eDate:'2024-01-02'
        },{
            depth:['','','','투자성향 설문 이동'],
            id:'app-account-010-1-1', status:'com',
            type:'modal', note:'',
            sDate:'2024-01-02', eDate:'2024-01-02'
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
            id:'app-survay-006', status:'com',
            type:'modal', note:'app-survay-004 [제출하기] 클릭 확인',
            sDate:'2023-12-20', eDate:'2023-12-21'
        },{
            depth:['','투자자격변경신청','투자성향결과',''],
            id:'app-InvtQulf-001', status:'com',
            type:'', note:'[설문 다시하기] 클릭 시, 투자자격변경신청 [app-InvtQulf-002] 팝업 노출',
            sDate:'2023-12-22', eDate:'2023-12-23'
        },{
            depth:['','','','자격유형 선택'],
            id:'app-InvtQulf-002', status:'com',
            type:'', note:'',
            sDate:'2023-12-25', eDate:'2023-12-25'
        },{
            depth:['','','','소득적격투자자'],
            id:'app-InvtQulf-002-1', status:'com',
            type:'', note:'상세내용',
            sDate:'2023-12-25', eDate:''
        },{
            depth:['','','','자격요건 선택'],
            id:'app-InvtQulf-002-1-1', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-25', eDate:'2023-12-25'
        },{
            depth:['','','','필요서류제출'],
            id:'app-InvtQulf-003', status:'com',
            type:'', note:'자격요건 유형별 전체 들어있음, 파일업로드 추가 script 포함',
            sDate:'2023-12-25', eDate:'2023-12-26'
        },{
            depth:['','','','필요서류제출-확인'],
            id:'app-InvtQulf-003-1', status:'com',
            type:'modal', note:'',
            sDate:'2023-12-25', eDate:'2023-12-25'
        },{
            depth:['','','','투자자격 변경 신청 완료'],
            id:'app-InvtQulf-004', status:'com',
            type:'', note:'',
            sDate:'2023-12-26', eDate:'2023-12-26'
        },

        {
            depth:['자산','내정보 요약','투자성향정보','투자성향관리/투자자격변경신청'],
            id:'app-myInfo-001', status:'com',
            note:'',
            sDate:'2024-01-09', eDate:'2024-01-09'
        },{
            depth:['','','연결계좌 및 예수금 현황',''],
            id:'app-myInfo-002', status:'',
            note:'[app-myInfo-001]에 내용 포함',
            sDate:'', eDate:''
        },{
            depth:['','','	내조각투자보유현황',''],
            id:'app-myInfo-003', status:'com',
            note:'',
            sDate:'2024-01-09', eDate:'2024-01-09'
        },{
            depth:['','','예수금출금안내',''],
            id:'app-myInfo-004', status:'com',
            note:'',
            sDate:'2024-01-09', eDate:'2024-01-09'
        },{
            depth:['','','청약/배당내역','공모내역'],
            id:'app-myInfo-005', status:'com',
            note:'거래내역',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','','','상세'],
            id:'app-myInfo-005-1', status:'com',
            note:'',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','','','배당내역'],
            id:'app-myInfo-006', status:'',
            note:'app-myInfo-005 기간 조회 배치',
            sDate:'', eDate:''
        },{
            depth:['','내가참여한청약','목록보기',''],
            id:'app-mygoods-001', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-13'
        },{
            depth:['','','청약상품 취소하기','청약신청 내역보기'],
            id:'app-mygoods-002', status:'com',
            note:'',
            sDate:'2024-01-13', eDate:'2024-01-13'
        },{
            depth:['','','','청약신청 취소하기'],
            id:'app-mygoods-002-1', status:'',
            note:'app-mygoods-002 모달 배치',
            sDate:'', eDate:''
        },{
            depth:['','','','청약취소 완료'],
            id:'app-mygoods-002-2', status:'',
            note:'app-mygoods-002 모달 배치',
            sDate:'', eDate:''
        },{
            depth:['','','청약상품 상세보기',''],
            id:'app-mygoods-006', status:'com',
            note:'',
            sDate:'2024-01-15', eDate:'2024-01-16'
        },{
            depth:['','','청약상품 중도해지','중도해지 신청안내'],
            id:'app-mygoods-008', status:'com',
            note:'',
            sDate:'2024-01-15', eDate:'2024-01-15'
        },{
            depth:['','내 경주마 경주현황','경주참여 결과','참여결과 및 경주일정'],
            id:'app-myrace-001', status:'com',
            note:'수익금 지급 안내 팝업, 디자인에 없는 탭 "경주참여 결과 / 일정" 추가',
            sDate:'2024-01-15', eDate:'2024-01-15'
        },{
            depth:['','','','내 청약상품 목록-경주성적_마별'],
            id:'app-myrace-002', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','경주참여 일정','내 청약상품 목록-경주일정_전체'],
            id:'app-myrace-003', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','내 청약상품 목록-경주일정_마별'],
            id:'app-myrace-004', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','내 청약상품 배당내역','청약상품 배당내역','우숭상금/자산매각 배당'],
            id:'app-mydvdns-001', status:'com',
            note:'',
            sDate:'2024-01-17', eDate:'2024-01-17'
        },{
            depth:['','내 투표 및 청산내역','청산투표','청산투표 목록'],
            id:'app-mydvdns-002', status:'com',
            note:'',
            sDate:'2024-01-18', eDate:'2024-01-18'
        },{
            depth:['','','','청산투표 상세보기'],
            id:'app-mydvdns-003', status:'com',
            type:'modal', note:'app-mydvdns-002 [상품 제목]클릭 시 팝업 노출',
            sDate:'2024-01-18', eDate:'2024-01-18'
        },{
            depth:['','','','관련문서보기'],
            id:'app-mydvdns-003-1', status:'com',
            type:'modal', note:'청산투표 상세보기 > 관련문서 [문서 제목]클릭 시 팝업 노출',
            sDate:'2024-01-18', eDate:'2024-01-18'
        },{
            depth:['','','','청산투표 투표하기'],
            id:'app-mydvdns-004', status:'com',
            type:'modal', note:'app-mydvdns-002 [투표하기]클릭 시 팝업 노출',
            sDate:'2024-01-18', eDate:'2024-01-18'
        },{
            depth:['','','청산내역','청산내역 목록'],
            id:'app-mydvdns-005', status:'com',
            note:'',
            sDate:'2024-01-20', eDate:'2024-01-20'
        },{
            depth:['','','','청산내역 상세보기'],
            id:'app-mydvdns-006', status:'',
            note:'청산내역 목록에서 펼침으로 확인가능',
            sDate:'', eDate:''
        },{
            depth:['','','','청산투표 결과보기'],
            id:'app-mydvdns-007', status:'',
            type:'modal', note:'app-mydvdns-003과 동일화면 [투표하기]버튼 제거',
            sDate:'', eDate:''
        },

        {
            depth:['펀딩','메인','',''],
            id:'app-goods-001', status:'com',
            note:'청약신청(공모참여) 팝업 추가[app-goodsApply-001](2024-01-18)',
            sDate:'2024-01-16', eDate:'2024-01-16'
        },{
            depth:['','청약신청','',''],
            id:'app-goodsApply-001', status:'',
            type:'modal', note:'app-goods-001 [참여하기] 클릭 시 노출',
            sDate:'2024-01-17', eDate:'2024-01-18'
        },

        {
            depth:['설정','메뉴','',''],
            id:'app-setMyInfo-000', status:'com',
            type:'', note:'설정 메뉴',
            sDate:'2024-01-02', eDate:'2024-01-02'
        },{
            depth:['','내정보관리','내정보관리',''],
            id:'app-setMyInfo-001', status:'com',
            note:'',
            sDate:'2024-01-02', eDate:'2024-01-02'
        },{
            depth:['','','휴대폰번호변경',''],
            id:'app-setMyInfo-002', status:'',
            note:'본인인증 후 변경 - app-signin-001.html',
            sDate:'', eDate:''
        },{
            depth:['','','이메일주소변경',''],
            id:'app-setMyInfo-003', status:'com',
            note:'',
            sDate:'2023-01-02', eDate:'2023-01-02'
        },{
            depth:['','인증/보안','지문인증사용설정',''],
            id:'app-setAuth-001', status:'',
            note:' ',
            sDate:'', eDate:''
        },{
            depth:['','','간편비밀번호변경',''],
            id:'app-setAuth-002', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','최근 소식','공지사항','목록'],
            id:'app-setNoti-001', status:'com',
            note:'펼침/닫힘으로 상세 노출',
            sDate:'2024-01-04', eDate:'2024-01-04'
        },{
            depth:['','','','상세'],
            id:'app-setNoti-002', status:'',
            note:'펼침/닫힘으로 상세 노출',
            sDate:'', eDate:''
        },{
            depth:['','','공시안내','목록'],
            id:'app-setNoti-003', status:'com',
            note:'',
            sDate:'2024-01-04', eDate:'2024-01-05'
        },{
            depth:['','','','상세'],
            id:'app-setNoti-004', status:'com',
            note:'',
            sDate:'2024-01-05', eDate:'2024-01-05'
        },{
            depth:['','고객지원','	자주하는질문','FAQ목록/상세보기'],
            id:'app-setFaq-001', status:'com',
            note:'',
            sDate:'2024-01-05', eDate:'2024-01-05'
        },{
            depth:['','','1:1문의','문의하기'],
            id:'app-setQna-001', status:'com',
            note:'문의하기/내역 페이지 묶음/ [취소/완료] 버튼 추가',
            sDate:'2024-01-05', eDate:'2024-01-06'
        },{
            depth:['','','','문의내역'],
            id:'app-setQna-002', status:'',
            note:'[app-setQna-001] 문의하기/내역 페이지 묶음',
            sDate:'', eDate:''
        },{
            depth:['','','이벤트 보기','목록'],
            id:'app-setEvent-001', status:'com',
            note:'',
            sDate:'2024-01-07', eDate:'2024-01-07'
        },{
            depth:['','','','상세'],
            id:'app-setEvent-002', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','알림설정','서비스 이용알림',''],
            id:'app-setAlarm-001', status:'',
            type:'modal', note:'[공통 > 알림 설정 팝업]',
            sDate:'', eDate:''
        },{
            depth:['','','마케팅/이벤트 알림',''],
            id:'app-setAlarm-002', status:'',
            type:'modal', note:'[공통 > 알림 설정 확인 팝업]',
            sDate:'', eDate:''
        },{
            depth:['','','모바일앱 버전',''],
            id:'app-setAlarm-003', status:'com',
            type:'modal', note:'',
            sDate:'2024-01-03', eDate:'2024-01-03'
        },{
            depth:['','약관 및 정책','동의한 약관보기',''],
            id:'app-setTerms-001', status:'com',
            note:'',
            sDate:'2024-01-07', eDate:'2024-01-07'
        },{
            depth:['','','개인정보취급방침',''],
            id:'app-setTerms-002', status:'com',
            note:'약관 상세보기 공통',
            sDate:'2024-01-07', eDate:'2024-01-07'
        },{
            depth:['','오픈소스 라이선스','',''],
            id:'app-setLicense-001', status:'com',
            note:'',
            sDate:'2024-01-08', eDate:'2024-01-08'
        },{
            depth:['','탈퇴하기','',''],
            id:'app-withdraw-001', status:'',
            note:'',
            sDate:'', eDate:''
        },

        {
            depth:['admin','로그인','',''],
            id:'adm-login-001', status:'com',
            note:'',
            sDate:'2024-01-07', eDate:'2024-01-07'
        },{
            depth:['','','비밀번호찾기(재설정)',''],
            id:'adm-password-001', status:'',
            note:'로그인 전체 요소 배치',
            sDate:'', eDate:''
        },{
            depth:['','','비밀번호재설정(분실)',''],
            id:'adm-password-002', status:'',
            note:'로그인 전체 요소 배치',
            sDate:'', eDate:''
        },{
            depth:['','','비밀번호 재설정(정기변경)',''],
            id:'adm-password-005', status:'',
            note:'로그인 전체 요소 배치',
            sDate:'', eDate:''
        },{
            depth:['','운영자관리','목록',''],
            id:'adm_admin_001', status:'com',
            note:'',
            sDate:'2024-01-04', eDate:'2024-01-05'
        },{
            depth:['','','상세',''],
            id:'adm_admin_002', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','','등록',''],
            id:'adm_admin_003', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','기준정보관리','조회',''],
            id:'adm-baseInfo-001', status:'com',
            note:'',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','','등록',''],
            id:'adm-baseInfo-003', status:'com',
            note:'',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','목장관리','등록',''],
            id:'adm-farm-003', status:'com',
            note:'',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','코드관리','조회',''],
            id:'adm_code_001', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','상세',''],
            id:'adm_code_002', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','등록','상위코드'],
            id:'adm_code_003', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','','','하위코드'],
            id:'adm_code_003-1', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','회원관리','목록',''],
            id:'adm-mamber-001', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','','상세',''],
            id:'adm-mamber-002', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','','주문대리인 지정',''],
            id:'adm-mamber-002-1', status:'com',
            type:'modal',note:'',
            sDate:'2024-01-08', eDate:'2024-01-08'
        },{
            depth:['','','주문대리인 검증 완료',''],
            id:'adm-mamber-002-2', status:'com',
            type:'modal',note:'',
            sDate:'2024-01-08', eDate:'2024-01-08'
        },{
            depth:['','','갤럭시아 청약 참여하기',''],
            id:'adm-goodsApply-007', status:'com',
            type:'modal',note:'',
            sDate:'2024-01-08', eDate:'2024-01-08'
        },{
            depth:['','메뉴관리','목록',''],
            id:'adm_menu_001', status:'com',
            note:'',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','','등록','부모메뉴등록'],
            id:'adm_menu_002', status:'com',
            note:'',
            sDate:'2024-01-10', eDate:'2024-01-10'
        },{
            depth:['','','','하위메뉴등록'],
            id:'adm_menu_003', status:'',
            note:'',
            sDate:'', eDate:''
        },{
            depth:['','권한관리','그룹조회',''],
            id:'adm_auth_001', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','','상세',''],
            id:'adm_auth_002', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','','등록',''],
            id:'adm_auth_003', status:'com',
            note:'',
            sDate:'2024-01-06', eDate:'2024-01-06'
        },{
            depth:['','경주마 관리','조회',''],
            id:'adm-racehorse-001', status:'com',
            note:'',
            sDate:'2024-01-09', eDate:'2024-01-09'
        },{
            depth:['','','상세보기',''],
            id:'adm-racehorse-002', status:'com',
            note:'swiper관련 기능 및 swiper.js, swiper.css 추가, 24-01-11 접종정보탭 관련 수정',
            sDate:'2024-01-09', eDate:'2024-01-09'
        },{
            depth:['','','등록',''],
            id:'adm-racehorse-003', status:'com',
            note:'',
            sDate:'2024-01-09', eDate:'2024-01-09'
        },{
            depth:['','공지/공시 조회','목록',''],
            id:'adm-noti-001', status:'com',
            note:'',
            sDate:'2024-01-11', eDate:'2024-01-11'
        },{
            depth:['','','등록',''],
            id:'adm-noti-004', status:'com',
            note:'',
            sDate:'2024-01-11', eDate:'2024-01-11'
        },{
            depth:['','청약상품 조회','상세',''],
            id:'adm-goods-002', status:'com',
            note:'',
            sDate:'2024-01-11', eDate:'2024-01-11'
        },{
            depth:['','','등록',''],
            id:'adm-goods-003', status:'com',
            note:'',
            sDate:'2024-01-11', eDate:'2024-01-11'
        },{
            depth:['','이벤트/배너 조회','목록',''],
            id:'adm-event-001', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-12'
        },{
            depth:['','이벤트/배너 조회','등록',''],
            id:'adm-event-003', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-12'
        },{
            depth:['','청약해지 조회','등록',''],
            id:'adm-termnt-003', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-12'
        },{
            depth:['','매각/청산관리','투표관리','등록'],
            id:'adm-vote-003', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-12'
        },{
            depth:['','아이콘메뉴 관리','상세',''],
            id:'adm-iconm-002', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-12'
        },{
            depth:['','아이콘메뉴 관리','상세',''],
            id:'adm-iconm-003', status:'com',
            note:'',
            sDate:'2024-01-12', eDate:'2024-01-12'
        },
        // {
        //     depth:['','','',''],
        //     id:'', status:'',
        //     note:'',
        //     sDate:'', eDate:''
        // },{
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
        } else if(page_arry[i].id.indexOf('adm') > -1){
            path = 'admin'
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