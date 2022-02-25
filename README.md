# 개발자를 위한 AI 북마크 비서 - Devook

<p align="center">
  <img src="https://images.velog.io/images/gywlsp/post/d6bb16ec-1e4c-4736-bb49-94acb0b545d5/Devook.png" style = "margin: 15px; width: 720px"/>
</p>

<br/>

## 서비스 소개 💁🏻‍♀️

- 서비스 이름 **Devook**은 Dev와 hook/book의 합성어로, 유저들이 추가(hook) 개발 관련 북마크들이 모여 개발자들을 위한 하나의 책(book)이 된다는 의미를 가지고 있습니다.
- Devook은 북마크 확장 프로그램과 웹앱, 모바일앱을 지원합니다.
  - 개발 완료 여부
    - [x] 웹앱
    - [ ] 모바일앱
    - [ ] 확장프로그램

<br />

### 주요 기능 🌟

1. 북마크 자동 분류
2. 읽기 TODO
3. 읽기 알림
4. 어디서나 읽기 목록 관리
5. 읽을 만한 글 추천
6. 읽기 메모

<br />

### 핵심 기능 🔑

1. **북마크 자동 분류**

   Devook은 유저가 북마크한 글을 파악해 자동으로 카테고리를 부여합니다. 유저는 북마크한 글들을 따로 분류할 필요 없이, 카테고리별로 북마크를 쉽게 필터링하여 볼 수 있습니다.

2. **읽기 TODO**

   유저는 북마크를 읽었는지 여부를 표시하는 체크박스를 통해, 어떤 북마크를 읽지 않았는지 쉽게 파악할 수 있습니다.

3. **읽기 알림**

   유저는 북마크에 읽기 기한을 설정할 수 있어, 마감일에 모바일앱으로 알림을 받아 읽어야 할 북마크를 놓치지 않고 읽을 수 있습니다.

   <img src="https://images.velog.io/images/gywlsp/post/b8de48cd-e162-421d-96b1-64f49fa4c672/image.png" style = "margin: 15px; width: 480px" alt="체크박스, 마감 기한 설정"/>

<br />

## 기술 스택 🛠

<div> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white">
  <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white"> 
  <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"> 
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> 
  <img src="https://img.shields.io/badge/prettier-F7B932?style=for-the-badge&logo=prettier&logoColor=black"> 
  <img src="https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">
  <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
  <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
  <img src="https://img.shields.io/badge/aws amplify-FF9900?style=for-the-badge&logo=aws amplify&logoColor=white">
</div>

<br />

## 개발 진행 상황 🏃🏻‍♀️

| 개발 파트 | 1. 북마크 자동 분류 | 2. 읽기 TODO       | 3. 읽기 알림                  | 4. 어디서나 읽기 목록 관리 | 5. 읽을 만한 글 추천 | 6. 읽기 메모       |
| --------- | ------------------- | ------------------ | ----------------------------- | -------------------------- | -------------------- | ------------------ |
| FE        |                     | :white_check_mark: | 모바일 앱 푸시 알림 구현 예정 | 모바일 앱 구현 예정        | :white_check_mark:   | :white_check_mark: |
| BE        |                     | :white_check_mark: | 모바일 앱 푸시 알림 구현 예정 |                            | :white_check_mark:   | :white_check_mark: |
| AI        | 진행 중             |                    |                               |                            | 진행 중              |                    |
