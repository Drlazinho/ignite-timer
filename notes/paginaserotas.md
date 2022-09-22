# Páginas e Rotas

<ul>
<li><a href="#routerdom">React Router Dom</a></li>
<li><a href="#headerENavLink">Header e Navlink</a></li>
<li><a href="#header&layout">Tipagem de temas</a></li>
<li><a href="#paginaHome">Estilos Globais</a></li>
<li><a href="#paginaHistory">Cores & Fonte</a></li>
<li><a href="#status">Configuração Eslint</a></li>
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
