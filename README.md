# Inventory
![enter image description here](https://lh3.googleusercontent.com/O09SJVI-XC9lVGTzkBN8lxKn7Aq2ppjkbZ3XkTK3vNLHPJvv5ZTwCGi4GcqtCT7MjvDYuBuKJE5H=s128 "창고정리 시스템")

창고정리는 **군내에서 복잡하고 어려운 물류관리를 쉅게 하기위해** 만든 프로젝트 입니다.
창고정리의 주요 기능은


-  창고에 쌓인 **재고을 추가하고 제거하거나 찾을수도** 있다.
-  재고가 창고에서 이동하는 경우 **그 기록이 남는다.**
-  재고 각 각의 **상태확인 및 입고**가 가능하다.

과 같은 기능으로  기존의 엑셀이나 군에서 일일이 손으로 작성한 장부보다 훨씬 좋다.  

개발자의 연락정보
-
팀이름 :인벤토리 
-  **육군 일병 강성준**  seongjung1109@gmail.com / 
-  개발기간  **2019/10/21~2019/10/24**

컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
-
- chrome 사용 권장
- Visual Code (혹은 그와 비슷한 에디터)
- Node.js (npm)
- 인터넷 접속 

설치 안내 (Installation Process)
-
 1. project Download
     
     - git  clone 
     or
     - 깃허브에서 알집으로 다운로드 

  2.  npm install
  - 파일을 터미널에서 열고 npm install 입력 
 
 3. 뷰 CLI 실행 
    - npm run serve 

사용법 (Getting Started)
-
- 1 . 창고에 재고 추가 


![enter image description here](https://lh3.googleusercontent.com/RT4sE9_V7kw3VBV8JjdgxgrShH-2s69WVK2AkSHZhNz3XbP9vqFu7av0p6q4WiwfgxtLX1JBB3t5)
	
창고에 새로운 물품이 오면 Product-Name에 마우스를 오버하면 추가 삭제 기능이 나온다. 여기서 물품을 추가하면 추가한 기록이 History에 저장된다. 또한 각 물품의 일렬번호가 있다면 Repair창에서 입력할 수 있다. 새로운 재고는 4가지 정보를 입력해야 된다. 물품 이름 , 갯수 , 구식/신식 ,날짜를 입력받는다. 검색 기능의 경우 재고의 이름으로 검색할 수 있고 재고를 클릭시 재고의 상태를 볼수도 있다.

- 2 . Repair 탭 


  ![enter image description here](https://lh3.googleusercontent.com/oqdPsaFfGgjqq0tphfByUwUAsI6DYbk5OPSqXlv5vCm899tpcJ5-NTcXE93PyusOhhOOxsRBhaTX)

위에서 말한것처럼 각 각의 재고의 일렬번호를 추가하고 일렬번호 삭제 추가가 가능하다. 삭제시 여러개를 한번에 삭제가 가능하다.

- 3 .History 탭


![enter image description here](https://lh3.googleusercontent.com/G7DrTf0jScV8k_nimlwxp2RCIeumtVsvoHHc7ayHDM9taIsARH1TSbu-ggJpETer0Hx9i08DxNl9)

각각의 재고에 대한 기록을 볼수 있다.


파일 정보 및 목록 (File Manifest)
- 
-  @/src 
- Views: 프로젝트에 사용된 컴포넌트 폴더
       - Home:  첫화면  폴더  
            - **Home.vue:  테이블을 구성하는 컴퍼넌트**
             - **Rmenu.vue/Lmenu.vue/Midmenu.vue/date.vue:  Home 을 구성하는 내용이 있는 컴퍼넌트**
            - **ArcCounter.vue:  그래프를 표시하기 위한 내용이  있는 컴포넌트**
            - **Graph.vue :  그래프의 데이터가 있는 컴퍼넌트**
             - **Footer.vue:  페이지 아래에 대한 내용이 있는 컴포넌트**
        - **About.vue : about에 대한 내용이 있는 컴퍼넌트**
		 -History.vue: history에 대한 내용이 있는 컴퍼넌트 
		 -Repair.vue : repair 에 대한 내용이 있는 컴퍼넌트 
- components : 로직이 들어간 폴더 
	-Addstorge.vue : Product-Name추가를 위한 내용이 있는 뷰
- Router.js : 라우팅 기능
-  main.js : 확장자 입력 등등
-  App.vue : 탭 기능 구현 
-  GlobalBus.js : 데이터 저장소 
	
		 
		       

저작권 및 사용권 정보 (Copyright / End User License)
- 
The MIT License (MIT) Copyright (c) 2007 James Newton-King https://raw.githubusercontent.com/JamesNK/Newtonsoft.Json/master/LICENSE.md The MIT License (MIT)

Copyright (c) 2007 James Newton-King

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

알려진 버그 (Known Issues)
-
- 탭을 더불 클릭시 경고가 뜸 

문제 발생에 대한 해결책 (Troubleshooting)
-
아직 없음 

크레딧 (Credit)
-
Core by **[Vue.js](https://vuejs.org/)**<br>
UI by **[element-ui](https://element.eleme.io/)**<br>
Thanks to **[국방부오픈소스아카데미](https://osam.kr/)**<br><br>
[웹동네](http://webdongne.com) **김춘경 멘토**님 감사드립니다.


업데이트 정보 (Change Log)
-
ver 1.0.0

 
