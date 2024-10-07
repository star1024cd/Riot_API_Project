# 🤍 RIOT API PROJECT

> Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.<br>
> 챔피언 목록, 아이템 목록, 챔피언 로테이션 등을 확인할 수 있습니다.<br/> ![image](https://github.com/user-attachments/assets/11003926-f4c5-4e39-a806-96ba172721b6)

<br/>

## ⚡ 배포 링크

### [Riot API PROJECT](https://riot-api-project-star.vercel.app/)

## 📦 폴더 구조

<details>
<summary>폴더구조</summary>
<br/>
📦my-riot-app<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂app<br/>
 ┃ ┃ ┣ 📂api<br/>
 ┃ ┃ ┃ ┗ 📂rotation<br/>
 ┃ ┃ ┃ ┃ ┗ 📜route.ts<br/>
 ┃ ┃ ┣ 📂champions<br/>
 ┃ ┃ ┃ ┣ 📂[id]<br/>
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂fonts<br/>
 ┃ ┃ ┃ ┣ 📜GeistMonoVF.woff<br/>
 ┃ ┃ ┃ ┗ 📜GeistVF.woff<br/>
 ┃ ┃ ┣ 📂items<br/>
 ┃ ┃ ┃ ┣ 📂[id]<br/>
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📂rotation<br/>
 ┃ ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┃ ┣ 📜favicon.ico<br/>
 ┃ ┃ ┣ 📜globals.css<br/>
 ┃ ┃ ┣ 📜layout.tsx<br/>
 ┃ ┃ ┣ 📜loading.tsx<br/>
 ┃ ┃ ┗ 📜page.tsx<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┣ 📂public<br/>
 ┃ ┣ 📂styles<br/>
 ┃ ┣ 📂types<br/>
 ┃ ┃ ┣ 📜Champion.ts<br/>
 ┃ ┃ ┣ 📜ChampionRotation.ts<br/>
 ┃ ┃ ┗ 📜Item.ts<br/>
 ┃ ┗ 📂utils<br/>
 ┃ ┃ ┗ 📜serverApi.ts<br/>
 ┣ 📜.env.local<br/>
 ┣ 📜.eslintrc.json<br/>
 ┣ 📜.gitignore<br/>
 ┣ 📜next-env.d.ts<br/>
 ┣ 📜next.config.mjs<br/>
 ┣ 📜package-lock.json<br/>
 ┣ 📜package.json<br/>
 ┣ 📜postcss.config.mjs<br/>
 ┣ 📜README.md<br/>
 ┣ 📜tailwind.config.ts<br/>
 ┗ 📜tsconfig.json<br/>
</details>
<br/>

## 💻 개발환경

![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Next.js&logoColor=)
![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=JSON&logoColor=white)

<br/>

## 📌 소개

#### 모든 페이지는 이미지 최적화를 위해 Next.js의 `<Image>` 컴포넌트를 사용했습니다.

### 1. 챔피언 목록 페이지

![image](https://github.com/user-attachments/assets/e1470b95-7934-4df1-8a49-3a61a4787377)

- 각 챔피언의 이름과 썸네일 이미지를 표시 합니다.
- 자주 변경되지 않는 챔피언 데이터는 `Incremental Static Regeneration(ISR)` 랜더링을 통해 성능을 최적화 했습니다.
  <br/>

### 2. 챔피언 상세 페이지

![image](https://github.com/user-attachments/assets/15bf4ce9-03ca-4dae-9d73-1d3c2e6f5a19)

- 동적 라우팅을 통해 특정 챔피언의 상세페이지를 표시합니다.
- 메타데이터를 설정하여 SEO를 향상시켰습니다.

  <br/>

### 3. 챔피언 로테이션 페이지

![image](https://github.com/user-attachments/assets/00d86e03-82ca-4268-80fd-b6f97d74b5c9)

- 현재 무료로 플레이 가능한 챔피언들을 표시합니다.
- `Client-Side Rendering (CSR)` 을 통해 랜더링 했습니다.
  <br/>

### 4. 아이템 페이지

![image](https://github.com/user-attachments/assets/c0203ddf-ec39-4c15-86ea-83debef41567)

- 모든 아이템의 목록을 표시합니다.
- 자주 변경되지 않는 아이템 데이터는 `Static Site Generation (SSG)` 을 통해 랜더링 했습니다.
  <br/>

![image](https://github.com/user-attachments/assets/dfed5a65-2b0c-417a-b8c9-86d3b719e5b0)

- 동적 라우팅을 통해 특정 아이템의 상세페이지를 표시합니다.
  <br/>
