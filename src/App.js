import { Container, Row } from "react-bootstrap";
import "./App.css";
import FetchData from "./Components/FetchData";
import MyNav from "./Components/MyNav";
import MainPage from "./Components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsElettronicPage from "./Components/DetailsElettronicPage";
import Cart from "./Components/Cart";
function App() {
  return (
    <div id="body" className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route
            path={"/OurShop"}
            element={
              <Container>
                <Row className="justify-content-evenly ">
                  <FetchData />
                </Row>
              </Container>
            }
          />
          <Route path="/Specific/:id" element={<DetailsElettronicPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
