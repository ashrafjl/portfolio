import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Contact from "./pages/Contac/Contact";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Container>
      <Grid container spacing={7}>
        <Grid
          item={true}
          lg={3}
          md={4}
          xs={12}
          sm={12}
        >
          <Profile />
        </Grid>
        <Grid item={true} xs>
          <Router>
          <Header />
            <div className="main_content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
