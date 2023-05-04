__NUXT_JSONP__("/cicd-2.0/chapter11", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{document:{slug:"chapter11",description:u,title:u,position:189,category:"持續交付2.0：實務導向的DevOps",menuTitle:"Chapter 11",contributors:["pomeloJ","changemyminds"],toc:[{id:v,depth:q,text:w},{id:x,depth:n,text:y},{id:z,depth:n,text:A},{id:B,depth:n,text:C},{id:D,depth:q,text:E},{id:F,depth:n,text:G},{id:H,depth:n,text:I},{id:J,depth:n,text:K},{id:L,depth:n,text:M},{id:N,depth:q,text:O},{id:P,depth:n,text:Q},{id:R,depth:n,text:S},{id:T,depth:n,text:U},{id:V,depth:q,text:W},{id:X,depth:n,text:Y},{id:Z,depth:n,text:_},{id:s,depth:n,text:s},{id:$,depth:q,text:aa},{id:ab,depth:q,text:ac}],body:{type:"root",children:[{type:b,tag:r,props:{id:v},children:[{type:b,tag:f,props:{href:"#114-%E7%92%B0%E5%A2%83%E5%9F%BA%E7%A4%8E%E8%A8%AD%E6%96%BD%E7%AE%A1%E7%90%86",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:o,props:{id:x},children:[{type:b,tag:f,props:{href:"#1141-%E7%92%B0%E5%A2%83%E6%BA%96%E5%82%99%E7%9A%844%E7%A8%AE%E7%8B%80%E6%85%8B",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"蠻荒法\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以 \"人腦 + 手工” 代表"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"剛起步的專案，整體不複雜，用戶與客戶數量不多\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"開發人員自己就可以搞定所有的軟體部屬相關問題"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"所有環境準備相關的知識都在開發人員腦中，團隊核心與英雄"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"規範法\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以 \"文檔\" + \"私有腳本\" 代表的 規範化狀態"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"隨著軟體服務的成功，用戶跟客戶數量變多，更多需求滿天飛過來，伺服器的數量也因此增長不少，環境維護工作變得多了起來\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"要求正式上線的部屬文件，通常會總結出一個環境部屬的準備說明書，由維運的人來執行\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例如 文檔可能有11個步驟，但每個步驟中又有許多子步驟。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"很多團隊是找不到這樣的環境說明文件，即使找到，可能也是無法使用過時的文件"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"要有規範化的上線部屬流程，此階段需要有個SOP文件，詳細紀錄每次的操作"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"利用私有化腳本，提升效率。每次的升級腳本都會重複之前一些動作"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"現在仍然有非常多的企業處於圖中此種狀態"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{alt:"11.4.2 某金融企業的上線流程是意圖",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F11-4-2-1.png"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"流程通過 \"人\" 來維護，經常有遺漏"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"文檔通過 \"EMAIL\"追蹤，查找不方便"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"審查工作量大，由於手工工作量大，常有人繞過過程"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自動化腳本不規範統一，而且經常出錯，導致部屬過程中斷"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以辦公自動化為代表的 \"標準化狀態\"\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"隨著軟體服務的越來越成功，公司也不斷的壯大，維運人員越來越多，生產部屬事件也多了起來"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"無紙化的型態出現，原先使用office寫文件，轉為線上系統填寫\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"流程平台統一化，軟體開發與維運皆在同一平台上"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"部分內容標準統一"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以部份重用，減少工作量"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"審核工作變得容易，所有紀錄皆保留平台上"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"但仍然有些許問題\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"系統操作變得複雜，有些仍需人工餐與"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"兩次上線部屬差異比對仍然困難，雖然開發人員可以複製上一份資料，但每個皆為獨立副本，很難進行比對查找"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以受控式自動化腳本為代表的 \"自動化狀態\"\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此階段的自動化維運腳本有兩種型態\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"操作過程式為主\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"符合原有的思考習慣，將原本的手工操作步驟轉為腳本語言即可"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"靈活，想做甚麼操作，幾乎手工操作都可以辦到，不受任何約束"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"狀態聲明式為主\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以明確知道，無論何種情況或誰來執行這個腳本，皆可以得到相同結果"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果將此腳本放置 git倉庫，可通過diff功能，比對差異"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"學習成本高，此DSL(Domain=Specific Language，領域專屬語言)用來描述環境部屬的專有操作與狀態"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"腳本數量較多時，文件管理也存在相同儲存結構問題"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此時可使用一些工作來做為輔助"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{alt:"11.4.2 CICD管理工具",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F11-4-2-2.png"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"工具運行模式可分兩種\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"拉模式\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"目標伺服器安裝 agent，保持與伺服器的連線與接受指令"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"推模式\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不須安裝客戶端 agent，只需由伺服器遠端連線進行操作即可"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:z},children:[{type:b,tag:f,props:{href:"#1142-%E9%A0%98%E5%9F%9F%E5%B0%88%E5%B1%AC%E8%AA%9E%E8%A8%80%E7%9A%84%E6%87%89%E7%94%A8",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以上說明的這些工具都定義了各自工具領域，此種語言可以描述出環境部屬狀態的文件。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以 Puppet管理 apache2 服務為例來說明\n"},{type:b,tag:p,props:{alt:"11.4.3 Puppet管理apache2腳本範例",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-4-2-3.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ansible 語法範例\n"},{type:b,tag:p,props:{alt:"11.4.4 Ansible 部屬apache2腳本範例",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-4-2-4.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:B},children:[{type:b,tag:f,props:{href:"#1143-%E7%92%B0%E5%A2%83%E5%9F%BA%E7%A4%8E%E8%A8%AD%E6%96%BD%E5%8D%B3%E4%BB%A3%E7%A2%BC",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"現在，已將環境基礎設施一系列準備工作以腳本描述出來，也能通過自動化方式來執行。\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"好處\n1. 無論哪個環境出問題，皆能快速構建出全新的環境\n1. 只要有權限，任何人皆可完成任務\n1. 任何對環境修改都可以被記錄與審核\n1. 對不同環境來說，將腳本對比即可知道差異，不需再登入至伺服器"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為了更進一步的優化，版本管理應該要有\n1. 操作系統名稱的版本號、補丁號與系統配置訊息\n1. 依賴軟體包的所有版本號與設置的內容\n1. 需與應用程式連線的版本號與設定檔內容"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:D},children:[{type:b,tag:f,props:{href:"#115-%E8%BB%9F%E9%AB%94%E9%85%8D%E7%BD%AE%E9%A0%85%E7%9A%84%E7%AE%A1%E7%90%86",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:o,props:{id:F},children:[{type:b,tag:f,props:{href:"#1151-%E4%BA%8C%E9%80%B2%E5%88%B6%E8%88%87%E9%85%8D%E7%BD%AE%E9%A0%85%E7%9A%84%E5%88%86%E9%9B%A2",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"一個應用程式通常程式碼與可執行檔是分開的，一旦編譯完成，此編譯執行檔就不會更改"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"編譯建置過程中，可能會有依賴其他套件包，通常套件包與編譯完成的執行檔是為分開的，但這兩項為必須，因而可視為不可分割的一環\n"},{type:b,tag:p,props:{alt:"11.5.1 二進制與配置項的分離示意",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-5-1-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"二進制執行檔部屬時需與套件包的各版本完全相同"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:H},children:[{type:b,tag:f,props:{href:"#1152-%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF%E7%9A%84%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"編譯執行檔時根據內容不同會設置各種設定檔\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"環境配置項(environment configuration)\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"網域、ip、api port、web port ...等"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"應用配置項(application configuration)\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"初始資料(帳密、通用資料...等)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"VM資源設置"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"DB連線資料"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Log紀錄相關設定"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"商務配置項(bussiness configuration)\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"預設值設定檔"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"某些商業邏輯計算設定"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{alt:"11.5.2 配置的分類",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-5-1-2.png"},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"使用資料夾來區分不同開發環境的設定檔\n"},{type:b,tag:p,props:{alt:"11.5.3 靜態配置與產品代碼同源",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-5-1-3.png"},children:[]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:J},children:[{type:b,tag:f,props:{href:"#1153-%E9%85%8D%E7%BD%AE%E9%A0%85%E7%9A%84%E5%84%B2%E5%AD%98%E7%B5%84%E7%B9%94%E6%96%B9%E5%BC%8F",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"儲存配置方法很多，最簡單的為使用純文字來記錄"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可針對不同環境寫不同設置"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"編譯時將根據不同環境自動載入配置檔"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:p,props:{alt:"11.5.4 配置文件示意圖",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-5-1-4.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:L},children:[{type:b,tag:f,props:{href:"#1154-%E9%85%8D%E7%BD%AE%E9%A3%84%E7%A7%BB%E8%88%87%E6%B2%BB%E7%90%86",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"隨著生產環境發展，某些設定檔會偏移原先預期的設定，通常是由臨時修改測試所引起的"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"一段時間必須做校正回歸，否則將常出現不穩定狀態，甚至當機"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"好的配置可以解決飄移問題，也可避免人為操作上的遺漏"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:N},children:[{type:b,tag:f,props:{href:"#116-%E4%B8%8D%E5%8F%AF%E8%AE%8A%E5%9F%BA%E7%A4%8E%E8%A8%AD%E6%96%BD%E8%88%87%E6%87%89%E7%94%A8",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:o,props:{id:P},children:[{type:b,tag:f,props:{href:"#1161-%E5%AF%A6%E7%8F%BE%E4%B8%8D%E5%8F%AF%E8%AE%8A%E5%9F%BA%E7%A4%8E%E8%A8%AD%E6%96%BD",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"物理主機鏡象技術 與 虛擬機鏡象技術\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"這兩種技術都可以提供環境準備效率"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"將上線的服務一模一樣分為兩份，同時部屬至不同地方"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"虛擬機除了可鏡象分離腳本外也可動態分配系統資源"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Docker容器技術\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"容器化特性可使部屬軟體部分大幅降低難度與成本"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:R},children:[{type:b,tag:f,props:{href:"#1162-%E9%9B%B2%E5%8E%9F%E7%94%9F%E6%87%89%E7%94%A8",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"雲端服務PAAS，可讓部屬人員使用 git push 即可完成部屬動作，只需等待建置完成後的結果"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PAAS先驅 Heroku 提出了 雲原生應用12要素\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"一套基本代碼多環境部屬"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"顯示聲明依賴關係"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在環境中儲存配置"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"把後端服務當作附加資源"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"嚴格分離建置、發佈與運行"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"應用程式本身應該是一個或多個無狀態進程，進程之間沒有資料共享"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"通過端口綁定提供服務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"通過進程模型進行擴展"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"快速啟動與優雅終止"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"盡可能讓開發環境、預生產環境與生產環境等價"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"日誌作為事件流"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"將管理\u002F管理任務作為一次性進程運行"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:T},children:[{type:b,tag:f,props:{href:"#1163-%E5%84%AA%E5%8B%A2%E8%88%87%E6%8C%91%E6%88%B0",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"優勢\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"簡化維運工作"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"部屬流程自行產生文件"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"持續部屬不停機，故障更少"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"減少錯誤與威脅"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"多類環境基礎設施的一致性"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"杜絕了\"配置飄移\""}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"被測試的即是被使用的"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"相對代價的挑戰\n"},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為不可變基礎設施建立一套自動化，初期成本較高"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"生產環境突發狀況，修復時間可能稍長"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"對大規模軟體服務來說，大檔案鏡象發佈至多台伺服器會消耗大量的網路資源，時間也會消耗不少"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有狀態儲存軟體服務不容易被直接替換"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:V},children:[{type:b,tag:f,props:{href:"#117-%E8%B3%87%E6%96%99%E7%9A%84%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"每個軟體都需要處理資料，對資料進行版本管理是一件比較困難的事情，但是我們可以通過對其中一部分內容進行版本管理，來提高產品之間的合作效率。例如: 加快測試環境的建立，提高自動化測試使用案例的執行可靠性。"}]},{type:a,value:c},{type:b,tag:o,props:{id:X},children:[{type:b,tag:f,props:{href:"#1171-%E8%B3%87%E6%96%99%E5%BA%AB%E7%B5%90%E6%A7%8B%E8%AE%8A%E6%9B%B4",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"當你使用關聯式資料庫系統，當軟體部署頻率變高，同時參與軟體開發的人員變多時，就應該對資料庫進行版本管理。除審計(Audit)管理和問題訂位外，對資料庫的版本管理在開發和自動化測試中也是非常有效地。"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"下圖為通過Flyway或Liquibase這類工具進行資料庫的升級或降級操作。搭配CI\u002FCD工具的在執行Pipeline時，進行資料庫的管理。\n"},{type:b,tag:p,props:{alt:"11-21 通過腳本保存關聯式資料庫的Schema變更",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-7-1-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"當我們把資料庫結構的變動腳本放到原始碼倉庫後，在執行自動化測試時，可以很方便地得到一個乾淨的初始化資料庫版本。當發布給客戶的歷史版本出現Bug時，為了訂位問題，我們可以很快的對資料庫進行清空然後重建到特定的資料庫版本。"}]},{type:a,value:c},{type:b,tag:o,props:{id:Z},children:[{type:b,tag:f,props:{href:"#1172-binary%E6%96%87%E4%BB%B6",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"對於二進制文件的版本管理，就不能使用原始碼版本控制系統了。此時可以通過類似FTP、遠端檔案系統進行管理。"}]},{type:a,value:c},{type:b,tag:ad,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"💡 這邊推薦MINIO系統服務來管理，他支援二進制的檔案版本管理，非常方便，參考"},{type:b,tag:f,props:{href:"https:\u002F\u002Fdocs.min.io\u002Fdocs\u002Fminio-bucket-versioning-guide.html",rel:[ae,af,ag],target:ah},children:[{type:a,value:"MINIO Versioning"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"當某公司內有一個"},{type:b,tag:t,props:{},children:[{type:a,value:ai}]},{type:a,value:"時，你可以將大尺寸檔案上傳到系統中時，它會返回一個URI，將URI放到一個文字檔案內容中，然後將文件檔內容納入到Git版本控制。這樣就將資料與產品原始碼版本進行統一的版本管理了。此時URL就是一個引用，而"},{type:b,tag:t,props:{},children:[{type:a,value:ai}]},{type:a,value:"就相當於一個儲存資料並進行版本管理的共享倉庫，這種方式對於測試資料管理是非常方便的。"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"另外一種狀況，當應用程式的啟動或運行需要仰賴一組資料檔案時，例如: "},{type:b,tag:t,props:{},children:[{type:a,value:"資料庫連線字串"}]},{type:a,value:"，我們可以先將資料庫連線字串進行演算法加密，當作一份二進制文件，然後將解密的演算法腳本加入到Git資料庫版本控管中，在程式執行時，將二進制文件進行載入後，在執行解密的演算法後，再進行資料庫的連線。"}]},{type:a,value:c},{type:b,tag:o,props:{id:s},children:[{type:b,tag:f,props:{href:"#%E8%B3%87%E6%96%99%E5%BA%AB%E7%89%88%E6%9C%AC%E8%A3%9C%E5%85%85",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"請參考"},{type:b,tag:"nuxt-link",props:{to:"\u002Fcicd-2.0\u002Fappendix01"},children:[{type:a,value:"Appendix 01 Database Version Control"}]}]},{type:a,value:c},{type:b,tag:r,props:{id:$},children:[{type:b,tag:f,props:{href:"#118-%E9%9C%80%E6%B1%82%E8%88%87%E5%8E%9F%E5%A7%8B%E7%A2%BC%E7%9A%84%E7%89%88%E6%9C%AC%E9%97%9C%E8%81%AF",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"由11-1圖中，程式碼、軟體包、環境都進行管理了，但我們想要對程式碼與需求項目進行關聯時，應該如何處理呢?"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"我們可以將需求內容進行文件化，並與對應的軟體包版本進行關聯，如果需求顆粒度要更細的管理，也可以將管理平台中的每個需求項目ID(或缺陷管理系統的缺陷ID)與程式碼進行關聯。例如: 再每次向程式碼倉庫提交程式碼時，將需求項目的ID，做為提交註解的一部分，並將這種關聯訊息進行展開出來。下圖是Mingle工具中的關聯參考"}]},{type:a,value:c},{type:b,tag:ad,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Mingle的SaaS從2019\u002F7\u002F31號開始已經停止服務。參考"},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.thoughtworks.com\u002Fmingle",rel:[ae,af,ag],target:ah},children:[{type:a,value:"官網"}]},{type:a,value:"。你可以使用其他替代工具，例如: jira、Asana 、TFS等等。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:p,props:{alt:"11-22 工具Mingle與程式碼倉庫的關聯式意圖",src:"\u002Fcode-study\u002Fimages\u002Fcicd-2.0\u002F11\u002F14-8-1-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:r,props:{id:ab},children:[{type:b,tag:f,props:{href:"#119-%E5%B0%8F%E7%B5%90",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"良好的軟體管理是打造持續交付Pipeline、加速驗證壞環節的基礎。"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"本章節主要有三個核心管理。"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"對一切進行版本管理"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"共享唯一來源"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"標準化與自動化"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"可以透過下面5個問題來驗證檢查你是否對一切都做了版本管理。下列5個問題是否都有放入到版本控制系統中呢?"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"產品原始碼和測試程式碼"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"軟體應用的配置訊息"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"各類環境的系統配置"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自動化的建置和部署腳本"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"軟體包是否進行版本管理"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"另外可以利用下列兩個問題來檢查軟體管理是否做得足夠好。"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以透過原始碼倉庫的專案，一鍵式地建構出完整軟體包嗎?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在沒有他人的幫助下，任何團隊成員都可以一鍵式自動化搭建出一套應用軟體系統，用於體驗產品新功能嗎?"}]},{type:a,value:c}]}]},dir:"\u002Fzh\u002Fcicd-2.0",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter11",extension:".md",createdAt:aj,updatedAt:aj,readingStats:{text:"18 min read",minutes:17.39,time:1043400,words:3478},to:"\u002Fcicd-2.0\u002Fchapter11"},prev:{title:"Chapter 10 自動化測試策略與方法",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter10",to:"\u002Fcicd-2.0\u002Fchapter10"},next:{title:"Chapter 12 低風險發佈",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter12",to:"\u002Fcicd-2.0\u002Fchapter12"}}],fetch:{},mutations:[]}}("text","element","\n","li","ul","a","true",-1,"span","icon","icon-link","p","ol",3,"h3","img",2,"h2","資料庫版本補充","u","Chapter 11 軟件配置管理","114-環境基礎設施管理","11.4 環境基礎設施管理","1141-環境準備的4種狀態","11.4.1 環境準備的4種狀態","1142-領域專屬語言的應用","11.4.2 領域專屬語言的應用","1143-環境基礎設施即代碼","11.4.3 環境基礎設施即代碼","115-軟體配置項的管理","11.5 軟體配置項的管理","1151-二進制與配置項的分離","11.5.1 二進制與配置項的分離","1152-配置信息的版本管理","11.5.2 配置信息的版本管理","1153-配置項的儲存組織方式","11.5.3 配置項的儲存組織方式","1154-配置飄移與治理","11.5.4 配置飄移與治理","116-不可變基礎設施與應用","11.6 不可變基礎設施與應用","1161-實現不可變基礎設施","11.6.1 實現不可變基礎設施","1162-雲原生應用","11.6.2 雲原生應用","1163-優勢與挑戰","11.6.3 優勢與挑戰","117-資料的版本管理","11.7 資料的版本管理","1171-資料庫結構變更","11.7.1 資料庫結構變更","1172-binary文件","11.7.2 Binary文件","118-需求與原始碼的版本關聯","11.8 需求與原始碼的版本關聯","119-小結","11.9 小結","blockquote","nofollow","noopener","noreferrer","_blank","大檔案儲存系統","2023-05-04T11:34:35.281Z")));