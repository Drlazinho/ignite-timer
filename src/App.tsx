import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/style";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <Button variant="primary"/>
        <Button variant="danger"/>
        <Button variant="secondary"/>
        <Button variant="success"/>
        <Button/>
    </ThemeProvider>
  )
}
