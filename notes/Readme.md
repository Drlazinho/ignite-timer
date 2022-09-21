# Anotações

## Styled-Components

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