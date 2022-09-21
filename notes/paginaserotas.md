# Páginas e Rotas

<ul>
<li><a href="#routerdom">React Router Dom</a></li>
<li><a href="#layouDeRotas">Layout de Rotas</a></li>
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