__NUXT_JSONP__("/cicd-2.0/chapter9", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:[{document:{slug:"chapter9",description:s,title:s,position:104,category:"持續交付2.0：實務導向的DevOps",menuTitle:"Chapter 09",contributors:["cshs108"],toc:[{id:t,depth:p,text:u},{id:v,depth:m,text:w},{id:x,depth:m,text:y},{id:z,depth:p,text:A},{id:B,depth:m,text:C},{id:D,depth:m,text:E},{id:F,depth:m,text:G},{id:H,depth:p,text:I},{id:J,depth:m,text:K},{id:L,depth:m,text:M},{id:N,depth:m,text:O},{id:P,depth:p,text:Q},{id:R,depth:m,text:S},{id:T,depth:m,text:U},{id:V,depth:p,text:W},{id:X,depth:p,text:Y}],body:{type:"root",children:[{type:b,tag:q,props:{id:t},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#91-%E8%B5%B7%E6%BA%90%E8%88%87%E5%AE%9A%E7%BE%A9",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Chrysler Comprehensive Compensation System(C3)，是一個用戶數達87000名的綜合人事與工資系統"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"1994年開始開發，預計1999年上線，1996年Kent Beck被邀請來挽救這個項目，並採用新的開發方式(極限編程方法)\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"遇到的問題：要把系統的不同部分整合起來，並且讓系統運作，常常需要1~2週的時間"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"極限編程：提高整合頻率，每次合併的東西較少，減少整合需要的時間，整合過程中的問題較好排解(Debug)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"方式：開發人員撰寫shell腳本，這個腳本定期去訪問儲存庫，只要發現有新的程式碼被提交，就將程式碼自動拉取到建構主機進行編譯"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"但是最後上線的版本僅能支撐10000人使用，2000年系統被捨棄"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:v},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#911-%E5%8E%9F%E5%A7%8B%E5%AE%9A%E7%BE%A9",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每日構建(daily build)、每晚構建(nightly build)\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每天定時自動執行一次軟體構建工作，將版本控制系統最新版本的程式碼在建構環境(沒有安裝集成開發環境的乾淨機器)下進行編譯、鏈結、打包的過程"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有助於確保開發人員明確了解前一天編寫的程式在整合的過程中是否發生問題，幫助開發團隊確定新的程式碼變更是否破壞原有功能"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"「持續集成是一種軟體開發實踐，團隊成員頻繁地將他們的工作成果集成再一起(通常每人每天至少提交一次，這樣每天就會有多次集成)；每次提交後，自動觸發一次包含自動化驗證的構建任務，以便能儘早發現集成問題」 —— Martin Fowler(2006)"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:x},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#912-%E4%B8%80%E6%AC%A1%E9%9B%86%E6%88%90%E9%81%8E%E7%A8%8B",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"開發人員提交程式碼到儲存庫"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"建構主機定期輪詢程式碼儲存庫"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有新的程式碼，下載到建置環境"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"根據建置腳本，執行建置"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"建置完成後上傳結果"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午6.04.46.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F227effc7-047c-4682-b577-f219d7d4897d%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%886.04.46.png?table=block&id=5ac832ff-f4d9-4adc-9ebc-8b4a32f9eeba&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:q,props:{id:z},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#92-%E5%85%AD%E6%AD%A5%E6%8F%90%E4%BA%A4%E6%B3%95",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"開發人員check out最新建置成功的程式碼"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"修改程式碼實作需求"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第一次個人建置(Build)：建置自己開發的東西(確保自己開發的東西沒問題)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第二次個人建置：從主幹中下載最新建置成功的程式碼(如果這段期間有其他人更新)，並且進行建置(自己開發的東西＋這段期間其他人的東西)\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"確保要上去主線的程式碼是沒問題的"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"提交程式碼"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第三次建置：如果程式碼通過自動化測試、靜態程式碼檢測，則將該程式碼並回主線，如果失敗則進行修復"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午6.08.26.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F803f49a1-4693-4b1c-9c2c-a54f55ed56a8%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%886.08.26.png?table=block&id=4970c8a1-51b7-49b4-8832-7322bc4623fa&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:B},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#921-%E5%9B%9B%E5%80%8B%E9%97%9C%E9%8D%B5%E9%BB%9E",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"六步提交法中的三次驗證有什麼作用\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"三次驗證的腳本必須一樣"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第一次驗證：確認開發者撰寫的內容是否正確，內容為自己"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第二次驗證：確認與最新版合併後系統是否正常，內容為自己＋他人"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第三次驗證：在乾淨受控的環境中執行與第二次驗證一樣的腳本，確保開發人員提交完整且無程式品質問題，內容為儲存庫最新版本\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果第二次驗證有過，第三次驗證沒過，代表1.自己這次程式碼提交不完整 2.自己的建置環境跟團隊有差 3.團隊成員有提交新代碼，但是自己沒發現"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"個人驗證(第一次驗證、第二次驗證)一定要做兩次嗎？\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"第二次驗證目標是驗證自己改的程式碼跟其他人提交的程式碼合併再一起，也符合預期"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果第一次有過，第二次沒過，代表其他人提交的內容影響到這次的開發內容"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"信心爆棚的工程師可以跳過個人第一次驗證，直接做第二次驗證即可"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如何確保在提交前執行個人建置\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在代碼合併到主線時，強制進行第二次個人驗證"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每次建置應該包含哪些品質檢驗內容\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"單元測試、程式碼靜態掃描(白箱)、程式碼規範檢查(code style)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"建置驗證測試(build verification test)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"建置結束產生的二進制內容是否包含正確的內容ex.配置文件的完整性"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"這個建置結果是否能夠正常安裝並且啟動運行"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"運行後最基本的功能是否可以使用ex.登入"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"針對接手舊案(大量遺留代碼的儲存庫)，使用程式碼靜態掃描可能會出現一堆錯誤，該怎麼處理？以下提供兩種解法"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"減少規範，關注重點：提取最重要的程式碼規範，早期只關注嚴重類型的問題，以後在逐步增加程式碼規範"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"執行「童子軍營地」原則：遺留代碼多，且系統已經上線一段時間，且最近不會動到那邊的程式碼，則暫時不去修(當作沒看到)，有動到那部份的程式碼，則考慮進行修復，做到每次提交時，沒有新增問題，最好問題可以逐步減少"}]},{type:a,value:c}]},{type:a,value:Z},{type:b,tag:"aside",props:{},children:[{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"💡 童子軍營地原則：離開營地前，確保營地和你使用之前一樣乾淨，能在乾淨一點就更好了\n"}]}]}]},{type:a,value:Z}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:D},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#922-%E5%90%8C%E6%AD%A5%E7%95%B0%E6%AD%A5%E6%A8%A1%E5%BC%8F",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"主要的差異是在程式碼提交到主線時(六步提交法的第五步)，後續開發人員的行為差異"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"同步：開發人員需要等到建置完成後，確保通過才進行下一個開發任務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"異步：提交後就可以開始下一個開發任務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Kent Beck不建議採用異步，因為可能存在浪費，ex.當開發人員已經在做下一個任務時，被通知上一個驗證沒過，需要調整，開發人員需要回想當初做了什麼"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:F},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#923-%E8%87%AA%E6%9F%A5%E8%A1%A8",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以從以下六個面向來檢查是否自己已經符合持續整合的最佳狀態"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"主線開發，頻繁提交：開發分之生命週期不超過三天"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每次提交都是一個完整的任務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"讓提交的建置都可以在10分鐘內完成：尤其使用同步模式(參考9.2.2)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"提交建置失敗後應禁止團隊成員提交新的程式碼，也不允許其他人check out該程式碼\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"當團隊成員提交代碼引起建置失敗，說明系統整體品質可能存在問題，因此整個團隊不應該繼續提交新的程式碼，而是集中火力解決這個問題"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"立即在十分鐘內修復已失敗的提交建置，否則該主線分支退回上一個提交點\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"因為問題被修復之前，這個分支上的內容無法上到release，導致其他人就算提交內容，這個分支的內容還是不能用"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為了讓其他人的內容可以持續提交，出問題的原開發有足夠的時間進行思考與修復，捨棄這個有問題的提交"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自動化建置驗證通過後，對軟體品質有較大的信心\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"反例情境：團隊並不覺得使用持續整合有什麼用處，因為他們有很多自動化測試案例，但是隨著系統功能增加，新增的測試案例卻很少，而且現有的測試案例測試失敗後，如果該問題太難修復，就刪除這個測試案例(解決提出問題的人，就是解決問題😀)"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:H},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#93-%E9%80%9F%E5%BA%A6%E8%88%87%E5%93%81%E8%B3%AA%E6%AC%8A%E8%A1%A1",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:n,props:{id:J},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#931-%E5%88%86%E7%B4%9A%E5%BB%BA%E7%BD%AE",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"隨著系統功能擴展，自動化測試的數量會越來越多，超果我們可以忍受的建置時間(10分鐘)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以將自動化測試拆成兩個部分，將運行速度較快，重點驗證項目放入提交建置裡面，運行較慢、不常驗證失敗的測試案例，放在次級建置驗證的內容"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"次級構建失敗，應該立即發出通知，並且立即修復，在修復之前不得提交新程式碼"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:L},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#932-%E5%A4%9A%E4%BA%BA%E5%90%8C%E6%99%82%E6%8F%90%E4%BA%A4%E7%9A%84%E5%BB%BA%E7%BD%AE",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果目前次級建置(每次可能需要執行30分鐘以上)進行中，新提交的程式碼就不執行次級建置，只做主要構建"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"直到次級建置完成後，新提交的程式碼(合併到儲存庫)，才會觸發下一次的次級建置，中間的次級建置全部被省略\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"1.節省建置資源 2.同時進行如果前者壞了，後者執行的內容全沒意義"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午7.05.02.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F80e7a723-e7f8-4b3e-ae11-df8b904ba8d4%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%887.05.02.png?table=block&id=afbe33b7-7ac3-4abd-8ebd-7fbecbdce43d&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:N},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#933-%E9%9B%B2%E7%AB%AF%E5%BB%BA%E7%BD%AE%E7%9A%84%E5%A8%81%E5%8A%9B",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"編譯過程主要分為預編譯、編譯、鏈結"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以透過雲端叢集的概念同步執行，減少整體建置時間的為「編譯」，各機器完成編譯後，再交由一台主機做整合的鏈結"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午7.08.12.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F29f3a3df-5319-472c-be51-ec23155de199%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%887.08.12.png?table=block&id=8523c28e-786c-4cad-8be5-4e1db9e3b525&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:q,props:{id:P},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#94-%E5%9C%A8%E5%9C%98%E9%9A%8A%E4%B8%AD%E5%AF%A6%E6%96%BD%E6%8C%81%E7%BA%8C%E6%95%B4%E5%90%88%E5%AF%A6%E4%BD%9C",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:n,props:{id:R},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#941-%E5%AF%A6%E4%BD%9C%E4%BA%94%E6%AD%A5%E6%B3%95",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"建置腳本化，搭建持續整合框架\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"選擇一款持續整合工作，目前比較夯的是Jenkins"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在該持續整合工具上建立一個建置任務，可以從你的儲存庫拉取程式碼"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"寫一個腳本文件，可以自動完成系統的編譯、建置、打包"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"修改持續整合工作上的任務(第二步)，讓他可以調用第三步的腳本"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"向儲存庫提交一次程式碼，驗證持續整合工作可以發現新代碼並拉取正確的程式碼版本，運行指定的腳本"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"添加已有的自動化驗證集合\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"增加自動化測試案例"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"加入程式碼規範掃描\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"SonarQube、Android Lite、CCCC、cppcheck、Clang、Pclint"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"選擇利於持續整合的分支策略\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果分支過多，則不利於團隊持續整合的效果"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"建立六步提交法"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"持續優化\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"初期整個機制運作正常，但隨著系統功能增加，整個過程出現了問題"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ex.測試案例本身的程式碼品質不良，導致隨機的測試失敗"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"優化編譯打包的時間"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"調整程式碼分支策略"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自動化測試案例的分級(ex.哪些應該放在次級構建)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"優化程式碼規範掃描(ex.調整規則)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"生成數據報告，方便團隊了解目前的程式碼品質狀態"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"工程師改變習慣，並提升技能\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"要求工程師主動提早整合，非推遲整合(不要一大包才提PR，一個PR不要包含多個任務)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"學習持續整合的工具如何使用"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午7.30.39.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5ff56794-242a-413e-a463-cf083ca3b736%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%887.30.39.png?table=block&id=ffdf31aa-1958-467d-a989-7ee2068304b7&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:n,props:{id:T},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#942-%E5%88%86%E6%94%AF%E7%AD%96%E7%95%A5%E8%88%87%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"主線開發，主線發布：開發團隊只要架設一個持續整合服務，關注主線的程式碼變更即可"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"主線開發，分支發布：當新增分支時，需要加增這個分支的部署流水線"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"分支開發，主線發布：(只有一個儲存庫，但是有多個系統)每個分支都需要有部署流水線，當有人併入主線觸發主線部署流水線，當分支不需要時，同時可以砍掉其部署流水線"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"多建置集成：系統來自於多個儲存庫，個別建置完觸發產品部署流水線"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午7.31.29.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e63bb6c-bb75-405e-b76c-f723532c9b48%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%887.31.29.png?table=block&id=21530940-b1a4-4c16-9a61-74bdbbbe0876&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午7.31.48.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe0f9b613-3ad8-4bed-b5de-063c13ae8ef8%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%887.31.48.png?table=block&id=27728ef2-36e3-4d35-921a-2930002ea45a&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:o,props:{alt:"截圖 2022-06-04 下午7.32.04.png",src:"https:\u002F\u002Fspiny-backbone-80c.notion.site\u002Fimage\u002Fhttps%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F55ca93cc-0a45-4fa1-9517-c4278c1158d7%2F%E6%88%AA%E5%9C%96_2022-06-04_%E4%B8%8B%E5%8D%887.32.04.png?table=block&id=8160d611-c001-461f-a7b2-8eaf43bd7d8c&spaceId=5d2d13ed-dba9-47b9-be73-4ea525461379&width=2000&userId=&cache=v2"},children:[]}]},{type:a,value:c},{type:b,tag:q,props:{id:V},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#95-%E5%B8%B8%E8%A6%8B%E5%9F%B7%E8%A1%8C%E5%95%8F%E9%A1%8C",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"團隊原有工作習慣，例如\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"開發人員在自己的開發任務完成之前不希望與別人的程式碼進行整合"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"測試人員希望在整批的開發完成後再進行集中測試"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"對於程式碼靜態掃描問題視而不見，1.團隊對於掃描規範沒有大家都認同 2.問題太多沒時間修"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自動化測試案例不夠，導致採用人工測試，必須開發完才有辦法整批測試，無法在每次提交時就進行測試"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"技術研發管理缺乏導致，例如\n"},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"開發、測試和維運環境沒有分離或分離不徹底，多人共用測試環境"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"各類測試環境的準備工作很複雜"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:X},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#96-%E5%B0%8F%E7%B5%90",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"主線開發，高頻提交代碼"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"每次提交都是完整有意義的任務"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"提交建置階段在十分鐘內完成"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"提交建置失敗後，立即修復，其他人不得在修復前提交代碼"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"應該在十分鐘內修復失敗，否則放棄這次的提交"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自動化建置成功後，團隊對於系統品質比較有信心"}]},{type:a,value:c}]}]},dir:"\u002Fzh\u002Fcicd-2.0",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter9",extension:".md",createdAt:_,updatedAt:_,readingStats:{text:"17 min read",minutes:16.615,time:996900,words:3323},to:"\u002Fcicd-2.0\u002Fchapter9"},prev:{title:"Chapter 08 利於集成的分支策略",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter8",to:"\u002Fcicd-2.0\u002Fchapter8"},next:{title:"Chapter 10 自動化測試策略與方法",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter10",to:"\u002Fcicd-2.0\u002Fchapter10"}}],fetch:{},mutations:[]}}("text","element","\n","li","ul","a","true",-1,"span","icon","icon-link","p",3,"h3","img",2,"h2","ol","Chapter 09 持續整合","91-起源與定義","9.1 起源與定義","911-原始定義","9.1.1 原始定義","912-一次集成過程","9.1.2 一次集成過程","92-六步提交法","9.2 六步提交法","921-四個關鍵點","9.2.1 四個關鍵點","922-同步異步模式","9.2.2 同步異步模式","923-自查表","9.2.3 自查表","93-速度與品質權衡","9.3 速度與品質權衡","931-分級建置","9.3.1 分級建置","932-多人同時提交的建置","9.3.2 多人同時提交的建置","933-雲端建置的威力","9.3.3 雲端建置的威力","94-在團隊中實施持續整合實作","9.4 在團隊中實施持續整合實作","941-實作五步法","9.4.1 實作五步法","942-分支策略與部署流水線","9.4.2 分支策略與部署流水線","95-常見執行問題","9.5 常見執行問題","96-小結","9.6 小結","\n  ","2022-07-21T09:09:31.206Z")));