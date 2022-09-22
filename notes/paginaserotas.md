# Páginas e Rotas

<ul>
<li><a href="#routerdom">React Router Dom</a></li>
<li><a href="#headerENavLink">Header e Navlink</a></li>
<li><a href="#Home">Styled-components - um component herdando de outro</a></li>
<li><a href="#inputs">Aprimorando Inputs</a></li>
<li><a href="#status">Status</a></li>
</ul>

----------

<h2 id="routerdom">React Router Dom</h2>

Usado para configurar a navegação de multiplas telas da aplicação

`npm i react-router-dom`

Cria um arquivo de configuração de rotas, onde cada Route chamamos uma pagina como element, e o path como vai aparecer na url.

### Routes.tsx
~~~~tsx
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
~~~~

### App.tsx

Para que as rotas funciona no App, além de configurar elas, precisamos contextualizar elas no App. Chamado o `BrowserRouter` englobando o `Routes` que criamos para configurar as rotas.

~~~~tsx
  import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/style'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

~~~~

----------

<h2 id="layoutDeRotas">Layout de Rotas</h2>

Existem várias de formas de colocar as rotas no App.

Uma delas é criar um Layout padrão, e usar o `Outlet` do Router-Dom, um espaço pra ser inserido o conteúdo especifico de uma página

**src/layouts/DefaultLayout.tsx**
~~~~tsx
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
~~~~

No arquivo Rotas, o DefaultLayout englobamos as rotas. De forma que para acessar as rotas que já tinha antes, será preciso passar pelo DefaultLayout.

~~~~tsx
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
~~~~
----------

<h2 id="headerENavLink">Header e Navlink</h2>

O NavLink e Link do react-route-dom é um componente que permite levar o usuário para a página, o NavLink pode ser correspondido como tag `<a></a>`. O NavLink dar a possibilidade de interagir com a página ativa.

~~~~tsx
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
~~~~
----------

<h2 id="Home">Styled-components - um component herdando de outro</h2>

Na estilização da Home, os components inputs possuem estilização semelhantes, com styled-components pode criar um component base que pode ser usada em outros components

~~~~ts
const BaseInput = styled.input`
  background: transparent;
`;

// Estilos usando o BaseInput como Base
export const TaskInput = styled(BaseInput)`
  flex: 1;
`;
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
~~~~
----------

<h2 id="inputs">Aprimorando Inputs</h2>

Em um dos inputs pode configurar o valor da entrada usando atributos html

~~~~tsx
    <MinutesAmountInput type="number" id="minutesAmount" placeholder="60" step={5} min={5} max={60}/>
~~~~

Podemos criar uma lista de dados que pode ser usada como lista de opções para um dos inputs sem que seja um select. Cria um datalist que se conecta com o input através do id com a list.
~~~~tsx
<TaskInput type="text" id="task" list="taks-suggestion" placeholder="Dê um nome para o seu projeto" />

<datalist id='taks-suggestion'>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
</datalist>
~~~~

Em um dos inputs mostra um seta pra baixo. Para remover, usa essa configuração de Estilos

~~~~ts
  /* Remove arrow down */
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
~~~~

----------

<h2 id="status">Status</h2>

~~~~ts
// É definido como constante pois o valor será utilizado para pegar as cores do themeProvider, se não declarado como constante, os valores serão retornados como qualquer string causando erro no código.
const STATUS_COLOR = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500'
} as const

// A interface usar como valor as chaves do tipo da STATUS_COLOR, isso facilita na adição de mais cores alterando apenas o STATUS COLOR
interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: .5rem;

  &::before{
    content: '';
    width: .5rem;
    height: .5rem;
    border-radius: 9999px;
    background-color:${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`;
~~~~
