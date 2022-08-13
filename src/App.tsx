import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Providers } from "./context";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Providers>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Providers>
    </ThemeProvider>
  );
}
