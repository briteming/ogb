import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/Header/intex";
import { MainContent } from "./components/MainContent";
import { Card } from "./components/Card";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Card type="profile">
          <Card.Image
            src="https://github.com/omarcoaur3lio.png"
            alt="Pode conter uma imagem de perfil"
          />
        </Card>
      </MainContent>
    </ThemeProvider>
  );
}
