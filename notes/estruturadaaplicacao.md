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

<hr/>

<h2 id="estilos_globais">Estilos Globais</h2>

<hr/>

<h2 id="cores_fonte">Cores & Fontes</h2>

<hr/>

<h2 id="eslint">Configurações do Eslint</h2>


