<h1 align="center">Duca boilerplate</h1>

## 💻 Repositorio

Como a ideia do desafio era sair um pouco da caixa, eu decidi não fazer um aplicativo por completo, mas tentar mostrar ao máximo como tomo decisões. Então decidi fazer um "boilerplate", eu configurei para ser usado tanto para um projeto pequeno, como também para um projeto grande com múltiplas pessoas trabalhando simultaneamente. O que isso quer dizer?

- Priorizei formatação dos arquivos, para manter um padrão em todos os arquivos e todos que forem trabalhar no repositório possuirem as mesmas ferramentas.
- Utilização de tecnologias/dependencias/libs já consolidadas, com comunidade ativa e utilizada em grandes empresas. Com isso não terá problema em estudar, procurar conteúdo sobre as techs.

Opcional: Como sou bem chato com organização kkkkkk e caso queira ver um conteúdo mais detalhado do que aprendi sobre boas práticas e como defino, deixei um arquivo em docs/boas-praticas.md 🙂

Outro ponto que decidi trazer essa ideia foi que durante a conversa com Gustavo a gente tinha discutido sobre vcs hj trabalharem com JS e estarem com algumas ideias de mudanças, então fica também algumas sugestões de boas práticas, estrutura de arquivos entre outros.

## 🚀 Techs

Algumas tecnologias utilizadas

```
"dependencies": {
  "@react-navigation/native": "^6.0.13",
  "@react-navigation/stack": "^6.3.1",
  "eslint": "^8.24.0",
  "expo": "~46.0.13",
  "prettier": "^2.7.1",
  "react": "18.0.0",
  "react-native": "0.69.6",
  "react-native-gesture-handler": "~2.5.0",
  "react-native-safe-area-context": "4.3.1",
  "react-native-screens": "~3.15.0",
  "react-native-svg": "12.3.0",
  "styled-components": "^5.3.6",
  "typescript": "^4.6.3"
},

"devDependencies": {
 "@babel/core": "^7.12.9",
  "eslint-config-prettier": "^8.5.0",
  "jest": "^29.1.2",
  "react-native-svg-transformer": "^1.0.0"
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
