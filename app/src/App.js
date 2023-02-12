import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./app/layouts/MainLayout";
import MainRouter from "./app/routers/MainRouter";

const primaryTheme = createTheme({
  palette: {
    primary: {
      main: "#886701",
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
