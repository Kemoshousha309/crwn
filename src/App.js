import "./App.css";
import  HomePage  from "./pages/HomePage/HomePage.component";
import  ShopPage  from "./pages/ShopPage/ShopPage.component";
import { Route, Routes } from "react-router";
import Header from "./components/header/header.component";
import SigningPage from "./pages/SigningPage/SigningPage.component";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact element={<HomePage />} path="/" />
        <Route exact element={<ShopPage />} path="/shop" />
        <Route exact element={<SigningPage />} path="/sign" />
      </Routes>
    </div>
  );
}

export default App;
