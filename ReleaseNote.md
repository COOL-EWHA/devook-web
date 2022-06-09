# ReleaseNote

### 1. [Devook](https://www.devook.com) 에 접속하여, **비로그인시**에도 열람 가능한 추천 글 목록을 살펴본다.

- 이 때 보이게 되는 추천글들은 DB에 있는 모든 글들을 한번 shuffle하여 제공함

<img width="680" alt="추천글목록" src="https://user-images.githubusercontent.com/58415191/172826381-0cf62d7f-ec94-4967-aca8-30caf1ab36ab.png">

<br />

### 2. 상단의 프로필 아이콘을 클릭하여, 로그인/회원가입을 진행한다.

- **소셜로그인 형태**로 제공하여
  구글 또는 애플 계정으로 간편하게 회원가입/로그인이 가능함
- **테스트 계정**은 구글 계정으로 생성해두었음
  > id : devook.test@gmail.com  
  > pw : devook12!

<img width="680" alt="로그인화면" src="https://user-images.githubusercontent.com/58415191/172826561-9bbda922-ba3e-4e67-8ac8-95331427b52f.png">

<br />

### 3. 로그인 한 후, (기존에 Devook에 추가해둔 북마크가 있을 경우에) 추천 글 목록이 달라졌음을 확인한다.

- 로그인시에는, **로그인 한 유저의 관심사에 맞추어 추천글 목록을 제공**함
  - 유저가 **북마크한 글들**의 **카테고리별 빈도**를 이용하여
    해당 비율대로 추천글 목록에 노출되게끔 함

<img width="680" alt="로그인후추천글목록화면" src="https://user-images.githubusercontent.com/58415191/172826607-7a3b426d-b2c0-455b-a2a0-24aa64bfa571.png">

<br />

### 4. 추천글들 중 북마크하고 싶은 글의 북마크 추가 버튼을 클릭하여 북마크에 추가해본다.

<img width="680" alt="추천글목록에서북마크추가" src="https://user-images.githubusercontent.com/58415191/172826604-b820d615-7c7f-42a6-a591-8d7f161a19d4.png">

<br />

### 4-1. 북마크 목록 페이지로 이동하여 방금 북마크에 추가하였던 글이 담겨져있음을 확인한다.

<img width="680" alt="추천글에서추가한북마크글확인" src="https://user-images.githubusercontent.com/58415191/172826599-a7fff924-6666-42a5-a39f-4f6d599249bb.png">

<br />

### 5. 상단의 + 아이콘을 클릭하여, 북마크를 추가해본다.

- 북마크하고 싶은 글의 **url은 필수** 입력
  - 예시 링크 : [https://velog.io/@teo/css-self-checklist](https://velog.io/@teo/css-self-checklist)
- 남기고 싶은 **메모는 선택** 입력

<img width="680" alt="북마크추가하기" src="https://user-images.githubusercontent.com/58415191/172826584-56a0ffb7-fe14-4cdf-8b10-e184a89dc16e.png">

<br />

### 5-1. 북마크 목록 페이지에서 방금 북마크에 추가하였던 글이 담겨져있음을 확인한다.

- 북마크를 하게 되면, Devook의 자체 크롤러와 분류기모델을 거쳐서
  **자동으로 글에 적절한 카테고리**가 부여됨

<img width="680" alt="추가한북마크확인" src="https://user-images.githubusercontent.com/58415191/172826667-ddb1a8f2-53ff-455f-813d-125a86e9d6e8.png">

<br />

### 6. [Devook 크롬확장프로그램](https://chrome.google.com/webstore/detail/devook/idpngjhpongbmmcnpkppkaaaaeanhfpb?hl=ko)을 다운받아 크롬에 설치한 후 확장프로그램을 통해 북마크를 추가해본다.

- **직접 url을 복사 붙여넣기 하지않고**도,
  확장프로그램 자체에서 현재 접속중인 사이트의 url을 알아내기 때문에
  **북마크 기능**을 더욱 편리하게 이용할 수 있음

<img width="680" alt="크롬확장프로그램" src="https://user-images.githubusercontent.com/58415191/172826663-b0420e53-d7cb-4bc4-bb38-f70a9d94596a.png">

<br />

### 6-1. 북마크 목록 페이지에서 방금 추가하였던 북마크글이 담겨져있음을 확인한다.

- 5-1 에서와 마찬가지로, **자동으로 카테고리가 부여되어** 북마크에 추가되었음을 확인 가능
- 북마크 목록 페이지에서 개별 북마크 마다 **읽기 기한 설정과 북마크 삭제**를 할 수 있음

<img width="680" alt="확장프로그램으로추가한북마크글확인" src="https://user-images.githubusercontent.com/58415191/172826659-27b35dc6-4b73-4ab7-a41f-91d6853d6fe0.png">

<br />

### 7. 북마크 목록 페이지에서 북마크 하나를 클릭하여 북마크 상세 페이지로 이동한다.

1. 글의 제목, 내용, 썸네일 이미지와 같은 **기본 정보를 열람**할 수 있고, 글 읽기 버튼을 클릭하여 **원글 링크로 이동**할 수 있음
2. 북마크 할 당시에 남겨둔 **메모를 확인하고 수정**할 수 있음
3. 하단에 **연관글도 추천**되며, 같은 카테고리에 해당되는 글 4개가 표시됨
4. 해당 글의 **읽기 기한 설정 및 북마크 삭제** 가능

<img width="680" alt="북마크상세화면" src="https://user-images.githubusercontent.com/58415191/172826651-3da5a885-7493-4d10-9f1b-32acee0025ac.png">

<br />

### 8. 필터링 버튼(#모양)을 클릭한 후, 글들을 카테고리별로 필터링하여 열람한다.

- 보고싶은 카테고리를 선택하면 (다중 선택 가능),
  **해당 카테고리에 해당하는 글들만 필터링하여 열람**할 수 있음
- 어느 페이지에서나 필터링 기능 사용 가능
  (추천 글 목록, 북마크 목록, 읽기 관리 페이지)

<img width="591" alt="필터링버튼" src="https://user-images.githubusercontent.com/58415191/172826095-7f3fbb5e-5d32-4baa-ae28-52484dcc0139.png">

<br />

### 9. 검색바에 단어를 입력하여 원하는 글을 검색해본다.

- **원하는 글을 검색기능을 통해 더 빠르게 접근**할 수 있음
- 어느 페이지에서나 검색 기능 사용 가능
  (추천 글 목록, 북마크 목록, 읽기 관리 페이지)

<img width="591" alt="검색기능" src="https://user-images.githubusercontent.com/58415191/172826635-3879a64c-4416-4473-a4ee-4676edfb717f.png">

<br />

### 10. 읽기 관리 페이지로 이동하여 북마크한 글의 체크박스를 클릭하여 읽음 여부를 표시한다.

- **체크박스에 체크하여 글 읽음 여부를 표시**함.
- 체크한 후, 새로고침하거나 다시 읽기관리 페이지에 들어와보면
  체크한 북마크들은 다 읽은 글이기때문에 **읽기관리 페이지에서 사라져있음**을 확인

<img width="591" alt="읽기관리체크박스" src="https://user-images.githubusercontent.com/58415191/172826133-541bc32a-0f20-4964-ae18-96a3de617d6d.png">

<br />

### 11. 읽기 관리 페이지에서 기한설정 버튼을 클릭하여 읽기 기한을 설정해본다.

- 읽기 기한을 설정한 날의 **당일 아침에 앱을 통해 푸시알림**을 받아 볼 수 있음

<img width="680" alt="읽기기한설정" src="https://user-images.githubusercontent.com/58415191/172826214-9ea64fd8-d7d3-4a7c-89be-57daf31e35a6.png">

<br />

### 12. 상단 헤더의 프로필 아이콘을 클릭하고 종모양 클릭하여 알림 목록 페이지로 이동하여 쌓인 알림을 확인해본다.

1. **마감기한 알림**

- 마감기한을 설정해둔 글의 경우,
  당일 아침 9시에 오늘이 읽기 마감 기한이라는 알림을 받아볼 수 있음

1. **앱 사용 유도 알림**

- 북마크한 글이 없는 경우,
  북마크를 추가해보라는 알림을 매일 저녁 9시에 받아볼 수 있음
- 북마크는 해두었지만 안읽은 글이 있는 경우,
  추가한 글을 읽어보라는 알림을 매일 저녁 9시에 받아볼 수 있음

<img width="591" alt="알림목록페이지" src="https://user-images.githubusercontent.com/58415191/172826155-7d48dd76-6ee2-4bfb-85d9-abc9de92d30a.png">
