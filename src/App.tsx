import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/style";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Button variant="primary"/>
        <Button variant="danger"/>
        <Button variant="secondary"/>
        <Button variant="success"/>
        <Button/>
    </ThemeProvider>
  )
}
