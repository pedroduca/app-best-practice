# Padrão de código e organização

Sumário

# Introdução

### Utilizar \***\*PascalCase em components, interfaces, e types\*\***

```jsx
// Componente
const Button = () => {
  ...
}

// Interface
interface ITokenOtpValidation {
  token: string
  keyValue: string
}

// Type
type IHomeProps = PScreenProps<'Home'>
```

### \***\*Usar camelCase para variaveis, arrays, objectos, functions, etc.\*\***

```jsx
const getLastDigit = () => { ... }

const userTypes = [ ... ]
```

### Usar camelCase para pastas e arquivos que não são componentes e PascalCase para nome de componentes

Quem nunca se perdeu com várias abas abertas e o nome dos arquivos index.tsx? Pensando nisso, utilizar dessa forma ajuda no dia-a-dia

```bash
/src/features/pix/hooks/useModal.ts
/docs/padroes-de-codigo.md
/src/features/pix/views/Home/Home.tsx
```

### De preferência a usar typescript barrel

Barril é uma maneira de acumular exportações e importações

```jsx
// helpers/index.ts
export * from './Formats';
export * from './Resolvers';
export * from './Share';

import { Resolvers, AsyncStorageHelper } from '@/src/utils';
```

### Evitar default export \*\*

Com default export as exportações não associam nenhum nome ao item que está sendo exportado, por um lado dá flexibilidade, mas se importamos o mesmo componente com nomes diferentes ou com nome não tão bem descritivo, vai virar bagunça

Usando named export a gente força importar com o nome original e evitando ambiguidade.

```jsx
// ❌ default export
export { default as Modal } from './Modal'

// ✅ named export
export { List } from './List/List'
export const List = ...;
export type List = ...;
```

### Ordem na importação \*\*

Existe 2 libs (**eslint-import-resolver-typescript, eslint-plugin-import**) que ele organiza o import dentro dos arquivos, e avisa quando o import está fora da ordem

Com o plugin \***\*eslint-plugin-import,\*\*** e adicionando config no settings.json do projeto, ele organiza automaticamente o import dos arquivos, se usar o `npx eslint src/features/pix` só de pix vai gerar um PR de 180 change files.

![react-native-import.gif](Padra%CC%83o%20de%20co%CC%81digo%20e%20organizac%CC%A7a%CC%83o%20035ecdf4541946c7ada7c10a70ceabaa/react-native-import.gif)

## Pastas

### A organização dos arquivos referentes à documentação deve ser:

- docs/
  - [padroes-de-codigo.md](http://padroes-de-codigo.md/)

O nome dos arquivos devem seguir o padrão _KebabCase_:

```
padroes-de-codigo.md

```

### A organização dos arquivos referentes ao React Native devem seguir o seguinte esquema:

- O nome dos arquivos devem ser em inglês:
- Para o nome dos arquivos de componente seguir o padrão _PascalCase_:
- src/
  - components/
    - Button/
      - Button.tsx
      - ButtonLabel.tsx
      - Button.spec.tsx

OBS: Caso tenha mais de um teste por na pasta `_tests_`

## Componentes

IconButton.tsx

- A ordem de escrita dos componentes deve ser:
  - Importar bibliotecas externas
  - Importar componentes locais e tipos que estão dentro do mesmo arquivo
  - Importar bibliotecas e funções locais
  - Importar actions, reducers
  - Importar selectors
  - Importar navigation's
  - Importar Interfaces, Types, Enums
  - Importar ícones, imagens, SVGs
  - Definição do componentes
    - Constantes e variáveis
    - Lógicas e funções
    - Retornos
  - Exportações

Exemplo:

```jsx
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { BodyLight, BodySemibold } from '../Typography'
import HelpIcon from '../../assets/help.svg'
import colors from '../colors'

type ProposalDetailsFooterProps = {
description: string
onPress: () => void
}

const Footer = ({
description,
onPress,
}: ProposalDetailsFooterProps): JSX.Element => (
<Container>
<TitleContainer>
<HelpIcon width={20} height={20} />
<Title color="brand-primary">Atendimento</Title>
</TitleContainer>
<Description color="brand-primary">{description}</Description>
<TouchableOpacity testID="talkToUs link" onPress={onPress}>
<Link color="brand-primary">Dúvidas? Fale conosco</Link>
</TouchableOpacity>
</Container>
)

const Container = styled.View  background-color: ${colors['neutral-980']};   padding: 32px 16px;
const TitleContainer = styled.View  flex-direction: row;
const Title = styled(BodySemibold)  line-height: 20px;   margin: 0px 0px 8px 8px;
const Description = styled(BodyLight)  margin-bottom: 20px;
const Link = styled(BodySemibold)  text-decoration: underline;

export default Footer
```

O arquivo de estilo deve possuir o mesmo nome do componente seguido de .styles.js:

Texto.styles.js

## Para arquivos de infraestrutura

- Para o nome das pastas de infraestrutura seguir o padrão _KebabCase_ e dos arquivos _PascalCase_:
- infraestrutura/
  - api/
    - APIBoleto.js

## Constantes

- Para nome de constantes que são números mágicos deve seguir o padrão abaixo:

js
const VALOR_MAXIMO_BOLETO = 250000

## Ícones SVG

- Antes importar os itens SVG do figma usar esse site [https://jakearchibald.github.io/svgomg/](https://jakearchibald.github.io/svgomg/) para otimizar o SVG.

Obs: Deixar as configurações padrão e habilitar a opção _Prefer viewBox to width/height_
