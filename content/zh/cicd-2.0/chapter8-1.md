---
title: 'Chapter 08-1 利於集成的分支策略'
description: 'Chapter 08-1 利於集成的分支策略'
position: 102
category: 持續交付2.0：實務導向的DevOps
menuTitle: 'Chapter 08-1'
---

# 前言

我們已經討論過如何將需求拆分成多個可交付、可驗收的用戶故事，以及如何將它們安排到我們交付迭代的過程中。接下來，本章將介紹研發團隊通過原始碼倉庫，高效組織團隊多人并發協作的方法，即代碼分支策略。分支策略的選擇對持續交付的成本與效果有很大的影晌。

## 8.1版本控制系統的使用目的

版本控制系統(Version Control System）主要用於存儲及追蹤目前（文件夾）和文件的修訂歷史（這里的修訂操作包括3類：新增、修改和刪除），從而讓你能夠回溯那些被納入其管理範圍之內的任意對象的任意一次修訂。其最本質的作用是回答"4個w"，即在什麼時間(When)、修改了什麼內容（What),是誰修改的（Who)以及為什麼要修改（Why),。其中最後一個"W"是通過用戶提交代碼變更時書寫提交注釋(Comments）的方式提供的。現在，版本控制系統已經成為團隊合作共同交付軟體過程中所用到的重要協作管理機制，是軟體公司的基礎設施。其目標是支持軟體配置管理活動，追綜和紀錄多個版本的并發和維護活動。根據版本控制系統的運作方式，目前市面上的主流版本管理系統被劃分為集中式版本控制系統和分佈式版本控制系統兩種類型。

### 8.1.1集中式版本控制系統

集中式版本控制系統的出現，解決了多人如何進行協同修改代碼的問題。這類版本控制系統，都有一個單一的集中管理的版本控制管理服務器，保存所有文件的歷史修訂版本紀錄。團隊成員之同的代碼交換必須通過客戶端連接到這台服務器，獲取自己需要的文件。每令人如果想獲得其他人最新提交的修訂紀錄，就必須從集中式版本控制系統中獲得。此時，客戶端并沒有整個集中式倉庫保存的所有內容，而是根據用戶的指定命令，一次僅能獲取倉庫中的某一次代碼文件快照。集中式版本控制系統示意圖如圖 8-1 所示。當工程師修改了部分代碼，但尚未完成全部工作時，如果希望將這個中間成果保存成臨時版本，做個備份時，則他通常只有兩種選擇：一是複製一份到另一個本地目錄中；二是直接提交到中央倉庫。而直接提交未經過質量檢驗的半成品到中央倉庫，可能會影響原有的功能，妨礙團隊其他人工作。這種類型版本控制系統的典型代表是 Subversion,簡稱為 SVN。

![8-1](images/cicd-2.0/08/8-1.png)

集中式版本控制系統有兩點劣勢。首先，在網路環境不佳的情況下，同步大量文件時會經常失敗。2007年底，GoCD 團隊使用 Subversion 作為版本管理工具。軟體產品研發團隊主要在北京工作，銷售人員在美國，售後支持人員在印度斑加羅爾，源代碼倉庫所用的 Subversion 服各器部署在美國芝加哥。有一次，開發人員從北京到斑加羅爾出差，找了一台新計算機，想在當地公司辦公室修改并提交代碼，但手上沒有源代碼。於是，打算將源代碼庫從版本控制庫檢出到這台新計算機上。然而源代碼庫稍大，印度辦公室的網路不穩定，前後花了數個小時，也沒能將代碼從中央服務器拉取到這台計算機上。

其次，集中式版本服務器具有單點故障風險。假如 Subversion 服務器檔機一小時，那麼在這一小時內，誰都無法提交更新，也無法從服務器獲取文件。最壞的情況是，如果服務器的硬碟發生故障，并且沒有做過備份或者備份不及時，則會有丟失大量數據的風險。那次事件以後，GoCD 團隊將源代碼倉庫從 Subversion 遷移到了 Mercurial，它是一款分佈式版本控制系統，簡你為 Hg, Facebook 也在使用它。

### 8.1.2分佈式版本控制系統

分布式版本控制系統與集中式版本控制系統的區別在於多個服務器共存，每個人的節點都是一個代碼倉庫，所有的節點都是平等的。在團隊協作過程中，通常會指定某個節點作為團隊的中央服務器，如圖 8-2 所示。

![8-2](images/cicd-2.0/08/8-2.png)

分布式控制系統的特點是：提交（commit)操作都是在本地進行而無須經過服務器，因此提交速度也更快。只有當需要向其他人或遠端服務器做文件提交或同步時，才通過網路將其推送到遠端倉庫或從遠端倉庫拉取。因此，即使在沒有網路環境的情況下，你也可以非常愉快地頻繁提交更新。當有了網路環境的時候，再推送到遠端的團隊代碼倉庫。目前主流的分布式版本控制系統是 Git。

前面提到 GoCD 團隊工程師在印度遇到的情況，如果使用分布式版本管理倉庫，即使網路不穩定，也可以比較方便地完成代碼拉取操作，如圖 8-3 所示。

 (1) Bob通過斑加羅爾辦公網路克隆（clolle）一份Sara的代碼倉庫（sara也在斑加多
羅爾辦公室）。
 (2) Bob從芝加哥的中央倉庫中拉取（pull）與本地倉庫有差異的代碼。
 (3) Bob修改代碼文件，井提交（commit）到本地倉庫，產生一個新的文件版本。
 (4) Bob將這個新的版本推送（push）至中央倉庫。
 (5) Sara即可從中央倉庫拉取（pull）所有的差異代碼。

![8-3](images/cicd-2.0/08/8-3.png)

### 8.1.3版本控制系統中的基本概念

版本控制系統要解決的核心問題是多人協作過程中的文件版本管理問題。目前所有的版本控制系統中都有幾個相似的概念，用於協調多人協作。在具體討論多人協作模式之前，因爲有多種版本控制系統，所以有必要對這些概念進行統一定義，以方便後續的討論。

- 代碼倉庫（codebase）是指一個包含一組文件所有歷史修改信息、的還輯單位，通常用於保存有關一個軟體產品或某一組件的所有文件信息紀錄。
- 分支（branch）是指對選定的代碼基線創建一個副本。人們可以對這個副本中的文件進行操作，而這些操作與原有代碼基線的文件操作是互不影響的。
- 主幹（trunk/master）是一令具有特殊意義的分支（branch)，通常在創建代碼倉庫時即由版本控制系統默認創建，每個代碼倉庫有且僅有一個這樣的分支。其特殊意文在於其於軟體的開發活動和發布方式緊密關聯，例如，在 SVN 中以" trunk "命名的分支和Git中以" master "命名的分支都是主幹分支，我們將在分支模式進一步討論它們的特殊意義。
- 版本號（revision）對應在某個分支（ branch ）上的一次提交操作，是系統產生的一個編號。通過這個編號，你可以獲取該次提交操作時的所有文件鏡像。在 SVN 中，它叫作 revision，是一令連續變化的正整數。而在 Git 中，它是一令 40 位的散列值，類似於"734713bco47d87b··…65ae793478c50d3"這樣一段字母與數字的組合。為了方便使用， Git 可以使用該散列值的前幾個字符來視別某次提交，只要你提供的那部分 SHA-1 不短於4個字符，并且沒有歧文即可。
- 標籤（tag）是某個分支上某個具休版本號的一個別名，以方便記憶與查找。你可以通過版本控制工具自身提供的命令來創建這個別名。
- 頭（head）是指某個分支上的最新一次提交對應的版本號。
- 合併（merge）是指將一令分支上的所有內容與某個目標分支上的所有內容進行合并，并在該目標分支上創建一個新版本號。
- 仲突（conflict）是指在合併操作時，兩個分支上的同一個文件在相同位置上出現不一致的內容。通常需要人工介人，確認如何修改後，方可合併目標分支。

依據上面的定義，通過下面的字串記憶方式可以唯一確定某個代碼鏡像：
{代碼倉庫名｝:｛分支名｝:｛版本號｝或者｛代碼含庫名｝:｛分支名｝:｛標籤｝

## 8.2常見分支開發模式

目前基於版本控制系統的開發模型，根據新功能開發以及版本發布所用的分支進行分析，主要有3種，它們分別是：
(1）主幹開發，主幹發布（Trunk-based Development&Release);
(2）主幹開發，分支發布（Trunk-based Development&Branch-based Release);
(3）分支開發，主幹發布（Branch-based Development&Trunk-based Release)。
下面我們分別介紹一下它們各自的特點。

### 8.2.1主幹開發，主幹友布

顧名思義，"主幹開發，主幹發布"是指工程師向主幹上提交代碼（或者每個分支的生命周期很短，如數小時，或少於1天），并用主幹代碼進行軟體交付（如圖8-4所示）。也就是說，所有新功能的開發，代碼均提交到主幹（trunk）上；但需要發布新功能時，直接將主幹上的代碼部署到生產環境上。

![8-4](images/cicd-2.0/08/8-4.png)

根據交付頻率不同，可以分為低頻交付和高頻交付兩類。低頻交付模型常見於一些周期比較長的大型軟體開發項目，也是一種最古老的軟體開發模式，當時的IT行業是以數年或數月為一個交付周期。
在低頻工作模式下，其主幹代碼總是長時間處於不可用狀態，只有在項目內所有功能的代碼開發完成後，才開始進行軟體聯調和集成測試工作。
在開發期間，版本控制系統的作用僅僅是確保代碼不丟失，是純粹的代碼備份倉庫。高頻交付子類型是指代碼庫中的代碼發布頻率較高，通常每天都會發布一次，甚至多次。
高頻交付子類型常見於具有比較完備的交付基礎設施（自動化配置構建、自動化測試、自動化運維、自動化監控與報警等）的互聯網產品團隊，通常也有快速缺陷修復能力，尤其適用於後台服各端產品形態（如 Web 網站或 SaaS 軟體的後台服各）。
這種模式的優點在於分支方式簡單，因此分支管理工作量較少（如代碼合并成本）,但也存在弱點。例如，針對低頻交付模式，其項目後期的缺陷修復階段，并不是團隊所有人都需要做缺陷修復，會有一定的資源浪費。針對這種情況，很多團隊會釆用後續介紹的"主幹開發，分支發布"模式，下面會詳細介紹。
針對高頻交付模式，由於多人向主幹上頻繁提交代碼，其代碼變動非常快。假如某個開發人員拉出一個私有開發分支，并在該開發分支上進行開發，開發完成後再合并回主幹。此時，他只有兩種工作方式。一是每天從主幹上更新代碼到他自己的分支上。此時該開發人員很可能每天需要一兩個小時將主幹上的代碼與自己分支上的代碼進行合并。二是不做每日更新，而是一段時間後（例如在分支上開發完成功能）之後，再向主幹合并。此時，很可能由於主幹上的代碼變化太大，導致自己這個分支上的代碼已經無法再合并回去了。

無法完成的"合并任務":

2011年，百姓網（一今生活分類網站）的研友團隊只有 12 名工程師。他們使用高頻交付模式，每天早上 7 點做一次生產環境發布。為了對某個重要模塊迸行重大重構，其技木負責人曾經創建了一個專有分支。然而，一周以後，他不得不宣布放棄該分支的所有代碼，因為其他工程師在主幹上己經做了太多的改動，專有分支已經無法合并回主幹。

"未開發完成的功能代碼不能帶入將要發布的版本裡"曾被認為是一和最佳軟體質量管理實踐。然而，在這種高頻交付模式下，很難再遵守這一實踐。相反，底該允許提交未完成功能的代碼，前提是不影響用戶的正常使用和發布。為了使未開發完成的功能不影響發布質量，可以使用一些特殊技術管理手段（如開發技術或抽象分支方法等）來處理這類問題，自然，這些手段也會序生一定的管理開銷。詳細方法參見第12章。與此同時，高頻交付模式也要求質量保征活動能夠做到既快速又全面。

### 8.2.2主幹開發，分支發布

![8-5](images/cicd-2.0/08/8-5.png)

這種開發模式是指(圖8-5)：

- 開發人員將寫好的代碼提交到主幹；
- 當新版本的功能全部開發完成或者已經接近版本發佈時間點的時候，從主幹上拉出一個新的分支；
- 在這個新的分支上進行集成測試，並修復缺陷，進行版本質量打磨。當質量達標後，再對外發布該版本。

其特點如下：

- 主幹代碼提交活動頻繁，對保障主幹代碼質量有較大的挑戰；
- 分支只修復缺陷，不增加新功能；
- 新版本發布後，如果發現嚴重缺陷，而且必須立即修復的話，只要在該版本所屬的分支上修復後，再次發布補丁版本，然後將分支上的修改合併回主幹即可。也可以在主幹上修復缺陷，然後將針對該缺陷的修復代碼挑出來（ cherry-pick ）合井到該缺陷所在的分支上。Facebook 的移動端產品開發流程就使用後面這種方式。

通常，發布分支的生命週期不應該持續時·間過長，一段時間後應埠終止該分支上的任何操作活動，例如，圖 8-6 中 Vl.01 發佈點之後， Vl.0 分支應該結束。
在"主幹開發、分支發布"模式下，從拉出發布分支開始，到分支代碼達到可交付狀態的時間週期可以作為評估主幹代碼質量的指示器，我們稱之為"質量打磨週期（ Branch Stabilization Time ）"。打磨週期越短，說明主幹代碼質量越好。當質量打磨週期極短時，就可以轉換到高頻的"主幹開發，主乾髮布"模式。當然，做到這一點並不容易，需要結合本書其他部分所描述的原則、方法與實踐，方能游刃有餘。

該模式的優勢在於：

- 與將要發布的新功能無關的人員可以持續工作在開發主幹上，不受版本發布的影響；
- 新發布的版本出現缺陷後，可以直接在其自己的版本發布分支上進行修復，簡單便捷。即使當前開發主幹上的代碼已經發生了較大的變化，該分支也不會受到影響。

其不足在於：

- 主幹上的代碼通常只能針對下一個新發布版本的功能開發。只要新發布版本的任何功能在主幹上還沒有開發完成，就不能創建版本發布分支，否則很有可能影響下一個發布的開發計劃，開源項目在發佈時間點以及特性功能方面的壓力小一些，因此常常採用這種分支方式；
- 使用這種開發模式，對發布分支的數量不加約束，並且分支週期較長，很容易出現"分支地獄"傾向，這種傾向常見於"系列化產品簇＋個性化定制"的項目，例如某硬件設備的軟件產品研發的分支模式，如圖 8-6 所示。

![8-6](images/cicd-2.0/08/8-6.png)

該硬件設備最初只有一種類型，其類別定義為 A ，型號是 x ，對應軟件的發布版本為 Ax1.0 發布以後，客戶提出了同類別不同型號的緊急需求，公司為了能夠快速響應客戶需求，從Ax l.0 的產品分支上又拉出一個產品分支，名為 Ay 分支，其發布版本為 Ay2.0 。然後又在 Ay 的基礎上開發了一個增強版 Az，對應的分支及時間點如圖 8-6所示。隨後在Axl.0

上發現了一個嚴重缺陷，需要增發 A1.01 補丁版本。該缺陷在Ay分支和Az分支上也同時存在。因此就要將修復缺陷的代碼移植到主幹及 Ay 和 Az 兩個分支。
該公司以這種管理模式支持了更多類別和型號的產品。如圖 8-6 中，公司開發了硬件產品B，而其軟件版本是從主幹分支上拉出，並先後發布了 B1.0 和 B1.01。客戶需要在 B 類型上也具有 Ay2 和 Az3 上的部分新功能特性，於是，公司決定從 Ay2.01 和 Az3.0 的分支上移植該新功能的代碼到B分支上。

隨著硬件類 別和型 號的不斷衍生，研發團 隊效率越來越差。如圖 8-6 中的虛線處所示，團隊終將疲於在分支間移植代碼和測試。這與《大規模敏捷開發實踐：HP LaserJet產品線敏捷轉型的成功經驗》一書中描述的HP激光打印機固件團隊在2008年的狀態相似。該團隊僅有 5% 的資源用於新功能的開發，而各分支間移植代碼會佔用團隊25%的時間，如圖 8-7 所示。

### 8.2.3分支開發，主幹發布

![8-7](images/cicd-2.0/08/8-7.png)
![8-8](images/cicd-2.0/08/8-8.png)

這種模式是指(圖 8-8 ) ：

- 團隊從主幹上拉出分支，並在分支上開發軟件新功能或修復缺陷；
- 當某個分支（或多個分支）上的功能開發完成後要對外發布版本時，才合入主幹；
- 通常在主幹上進行缺陷修復，質量達標後，再將主幹上的代碼打包發布。

這種模式的優勢在於 ：

- 在分支合井之前，每個分支之間的開發活動互相不受影響；
- 團隊可以自由選擇發布i哪個分支上的特性；
- 如果新版本出現缺陷，可以直接在主幹上進行修復或者使用 hotfix 分支修復，簡單便捷，無須考慮其他分支。

它的優勢也會導致不良後果，即為了分支之間盡量少受影響，開發人員通常會減少向
主幹合併代碼的頻率，從而推遲了發現各分支中代碼衝突的時間，不利於及時進行代碼重
構，如圖 8-9 所示。

該主幹上的代碼中原有一個方法簽名為handleY(int b）。 Alice 和 Bob 各自領取一個新功能的開發任務，並創建了對應的一個分支 A 和 B ，而且，在新功能開發完成之前，兩人都沒有向主幹合併代碼。為了完成自己的新功能， Alice 對 handleY 方怯進行了修改，將其簽名變更為handleY(int[]， boolean c）。同時， Bob在自己的分支上也修改了 handleY(int b) 的內部實現。主幹上發生了兩次 hotfix ，兩人都將主幹的修改合入了自己的分支上。在這之後 ， Bob 又從handleY(int b） 中抽取了一個方告， 簽名為 findX(int[] a）。此時Alice開發完成了自己的新功能，將代碼（從 al 到 a4 ） 合入主幹。當 Bob 打算提交 代碼到主幹時，他需要將 Alice 的4次代碼變更與自己的 5 次變更合併在一起。由於Alice修改較大，這個合併很可能成了非常大的包袱。Bob 發現，Alice 不但修改了很多文件，而且對方戰 handleY（）進行了較大的重構。然而，這些還只是文本上的衝突，比較容易發現和修正。風險更大的則是語義上的衝突，即程序運行時的邏輯衝突。這類情況的發生會令團隊成員進行代碼重構的意願大大下降，從而令代碼的可維護性越來越糟糕。

![8-9](images/cicd-2.0/08/8-9.png)

不頻繁的集成導致的巨型代碼合併

如果分支過多，那麼衍生出來的問題是：當某個分支的生命週期（即從主幹拉出分支那一時刻至將其再次合入主幹這段時間週期）過長，代碼合併及驗收成本會快速增加。成本增加的數量與其生命週期中合入主幹的分支數量成正比。

若想成功使用這種模式，其關鍵點在於：

- 讓主幹盡可能一直保持在可發布狀態；
- 每個分支的生命週期應該盡可能短：
- 主幹代碼儘早與分支同步；
- 一切以主幹代碼為準，盡可能不要在各特性分支之間合併代碼。

另外，根據分支的存在周期和目的，"分支開發，主乾髮布"模式還可以進一步分為兩種子類型，它們分別是特性分支模式和團隊分支模式。

1. 特性分支模式在開發過程中，允許多個開發分支同時存在，且每個分支對應一個功能特性的開發工作。當該特性開發完成後，立即合入主幹，其他尚未合入主幹的特性分支需要從主幹拉取主幹代碼，與自己分支上的代碼進行合併後，才能再合回主幹。這種模式為特性分支模式，如圖 8-1O 所示。

![8-10](images/cicd-2.0/08/8-10.png)

該模式的目的是：

讓團隊更容易在"特性"這個層次上並行工作，同時保持主幹的穩定可發布狀態。其優勢在於每次發布的內容調整起來比較容易。假如某個新功能或者缺陷在版本發佈時間點之前無桂完成，則不必合入主幹中，也不會影響其他功能的發佈時間點。

但這種模式也有不足：如果特性分支過多，會帶來比較多的合併成本。例如，每當某個特性分支開發完成打算合入主乾時，都需要與主幹的代碼合井，並進行質量驗證。一旦主幹代碼的質量驗證通過，其他分支此時都應該從主幹上拉取最近的通過質量驗證的新代碼。否則，如果在特性開發完成後再與主幹合井，那麼這種一次性合併會帶來較大的工作量和質量驗證工作。如圖 8-10 所示，特性 2 分支需要合併特性1、3和4的代碼。

假如有多個特性同時開發完成，怎麼辦？下面是兩種極端的做法。

1. 所有已完成的特性分支一同向主幹合井，然後再共同設怯讓主幹代碼達到可交付狀態。這種方式通常會被特性團隊排斥。因為共同合併後，多方代碼交織在一起，出現的缺陷可能很難快速定位和快速修復。
2. 所有已完成的特性分支排成隊列，以順序方式合入主幹。每個特性分支向主幹合人代碼後，必須使主幹上的代碼達到可交付狀態後，下一個特性分支才可以合入。這種方式通常是特性分支的常見做氈，也是特性分支的優勢所在。但所帶來的問題是，多個特性分支按排隊順序進行合井，會導致排在隊尾的特性分支等待較長的時間 。

如果想讓特性分支方式更好地工作，需要做好下面的管理。

1. 每個特性分支的生命週期都應該很短，分支上的開發和測試工作盡量在3天內完成。這要求盡可能將"特性"拆分成小需求。關於需求拆分的方怯，參見第 6 章。
2. 開發人員每天從主幹上拉取最新的可交付代碼，與自己的分支合井。
3. 不要從其他特性分支上拉取代碼。

![8-11](images/cicd-2.0/08/8-11.png)

2.團隊分支模式

團隊分支可以看作是特性分支的一種特殊情況。也就是說，一組人一起在同一個分支上進行開發工作，而且該分支上通常包括一組相近及相關的特性集合的開發。由於是一組特性集合的開發，因此其分支存續時間比特性分支的存續時間長。

這種分支模式通常出現於規模較大的團隊（ 40 人以上）共同開發同一款產品，團隊被分成多個組，每組開發不同的系統組件。只有當一系列功能特性開發完成後，才對外發布新的軟件版本，很容易成為典型的瀑布開發流程，如圖 8-12 所示。

![8-12](images/cicd-2.0/08/8-12.png)

團隊分支模式在通信公司的產品研發或大型客戶端軟件產品研發中比較常見，例如第14章的案例中，團隊研發管理模式改進之前，就使用這種開發模式。成功應用這種模式的關鍵在於：

1. 每個團隊儘早向主幹合入高質量的代碼，即使不馬上發布：
2. 向主幹合入代碼後，盡快使其達到可交付狀態：
3. 其他團隊儘早從主幹拉取可交付狀態的代碼，與自己分支上的代碼合井。