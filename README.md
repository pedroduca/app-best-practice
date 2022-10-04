<h1 align="center">Duca boilerplate</h1>

## 💻 Repositorio

Com passar do tempo eu criei alguns repositórios pessoais, e sempre utilizado a mesma config e decidi salvar meu tempo.

Esse repositório, que é um "boilerplate", eu configurei para ser usado tanto para um projeto pequeno, como também para um projeto grande com múltiplas pessoas trabalhando simultaneamente. O que isso quer dizer?

- Priorizei formatação dos arquivos, para manter um padrão em todos os arquivos e todos que forem trabalhar no repositório possuirem as mesmas ferramentas.

- Utilização de tecnologias/dependencias/libs já consolidadas, com comunidade ativa e utilizada em grandes empresas. Com isso não terá problema em estudar, procurar conteúdo sobre as techs.

Opcional: Como sou bem chato com organização kkkkkk e caso queira ver um conteúdo mais detalhado do que aprendi sobre boas práticas e como defino, deixei um arquivo em docs/boas-praticas.md 🙂 

## 🚀 Techs

Algumas tecnologias utilizadas

```
"dependencies": {
  "normalize.css": "^8.0.1",
  "react": "^17.0.1",
  "react-icons": "^4.1.0",
  "styled-components": "^5.2.1",
  "typescript": "^4.0.3",
},

"devDependencies": {
  "@types/styled-components": "^5.1.7",
  "@typescript-eslint/eslint-plugin": "^4.10.0",
  "@typescript-eslint/parser": "^4.10.0",
  "eslint": "^7.15.0",
  "eslint-config-airbnb": "^18.2.1",
  "eslint-config-prettier": "^7.0.0",
  "eslint-import-resolver-typescript": "^2.3.0",
  "eslint-plugin-import": "^2.22.1",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-plugin-prettier": "^3.3.0",
  "eslint-plugin-react": "^7.21.5",
  "eslint-plugin-react-hooks": "^4",
  "prettier": "^2.2.1"
}
```

## 🗂 Folders

```
├── docs
│   ├── boas-praticas.md
├── src
│   ├── App.tsx
│   ├── components
│   ├── index.tsx
│   ├── views
│   │   └── Home
│   │       ├── Home.tsx
│   │       └── Home.styles.ts
│   └── styles
│       ├── GlobalStyles.ts
│       └── theme
│           ├── defaultTheme.ts
│           └── styled.d.ts
├── .editorconfig
├── .gitignore
├── package.json
├── prettier.config.js
├── README.md
├── settings.json
├── tsconfig.json
└── yarn.lock
```

## 🧩 Extensões que não podem faltar!

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest).
