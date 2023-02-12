import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import MainRouter from "./app/routers/MainRouter";
import "../src/style/main.scss";

const primaryTheme = createTheme({
  palette: {
    primary: {
      main: "#537FE7",
      main50: "#537fe780",
      text: "#181823",
      light: "#C0EEF2",
      lighter: "#E9F8F9",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        },
        contained : {
          // backgroundColor: "purple",
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto, sans-serif"
        },
        h1: {
          fontSize: "4rem",
        },
      },
    },
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={primaryTheme}>
        <BrowserRouter>
          <MainLayout>
            <MainRouter />
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
