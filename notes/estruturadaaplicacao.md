# Estrutura da Aplicação

<ul>
<li><a href="#styled_components">Styled-Components</a></li>
<li><a href="#configurando_temas">Configurando temas</a></li>
<li><a href="#tipagem_temas">Tipagem de temas</a></li>
<li><a href="#estlios_globais">Estilos Globais</a></li>
<li><a href="#cores_fonte">Cores & Fonte</a></li>
<li><a href="#eslint">Configuração Eslint</a></li>
</ul>

<hr/>

<h2 id="styled_components">Styled-Components</h2>
O Styled Components é uma biblioteca de CSS-in-JS que permite que a gente utilize o CSS dentro do JavaScript e em um formato parecido com os do React, adicionando muitas funcionalidades à estilização da nossa aplicação.

### Exemplo complexo de Styled Components com variação de estilização

**Button.styles.ts**
~~~~typescript
import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }}
`
~~~~

**Button.tsx**
~~~~tsx
import {ButtonContainer, ButtonVariant} from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
~~~~

**App.tsx**
~~~~tsx
        <Button variant="danger"/>
        <Button variant="secondary"/>
~~~~

<hr/>

<h2 id="configurando_temas">Configurando Temas</h2>

Com styled_components podemos criar um thema para a aplicação

Usamo o themeProvider envolta do App
~~~~tsx
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/style";

export function App() {

  return (
    //Com a tag theme podemos chamar o nosso tema padrão personalizado, podemos criar logica envolta disso.
    <ThemeProvider theme={defaultTheme}>
        ....
    </ThemeProvider>
  )
}
~~~~

**./styles/themes/style**

~~~~ts
export const defaultTheme = {
  white: '#fff',
  primary: '#8257e6',
  secondary: 'orange',
}
~~~~

<hr/>

<h2 id="tipagem_temas">Tipagem de Temas</h2>

Podemos sobrescrever a tipagem de uma biblioteca existente.

**src/@types/styled.d.ts**
~~~~ts
import "styled-components";
import { defaultTheme } from "../styles/themes/style";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
~~~~

<hr/>

<h2 id="estilos_globais">Estilos Globais</h2>

Definição de estilo para toda aplicação com `createGlobalStyle` do `style-components`

**./src/styles/global.ts**
~~~~ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background-color: #333;
    color: #fff;
  }
`;
~~~~

<hr/>

<h2 id="cores_fonte">Cores & Fontes</h2>

Fontes foram importadas do googlefontes no arquivo do index.html

~~~~html
  <meta charset="UTF-8" />

  <!-- É recomendado que links preconnect ficam no topo -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto+Mono:wght@700&display=swap"
    rel="stylesheet">
~~~~

~~~~ts
export const defaultTheme = {
  white: '#FFF',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',
}
~~~~

<hr/>

<h2 id="eslint">Configurações do Eslint</h2>

Lint valida o código para seguir os padrões do criador do projeto.
Defini padrão de código
Recomendado instalar extensão do Eslint
E instalar o eslint como dependência dev

`npm i eslint -D`

Também pode usar configurações eslint de outros criadores, neste projeto foi aplica a configuração eslint da Rocketseat

`npm i @rocketseat/eslint-config`

Para criar a própria configuração do Eslint rode o comando

`npm eslint --init`

Cria um arquivo na raiz `.eslintrc.json`

~~~~json
{
  //essa configuração da rocketseat tem vários tipo de extensão pra vue, next, react
  "extends": "@rocketseat/eslint-config/react"
}
~~~~

#### Usando o eslint

Para usar o eslint rode o commando com as ultimas sendo as extensões finais dos arquivos

`npx eslint src --ext .ts, .tsx`

Esse commando mostrará todos os erros de padrão quem tem no código. Para consertar todos eles de uma vez, usa o commando

`npx eslint src --fix`

Uma dica DEV, usar o commando do eslint como Script de commando.
~~~~json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .ts, .tsx"
  },
~~~~