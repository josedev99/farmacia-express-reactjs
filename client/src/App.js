import {Route,Routes} from "react-router-dom"
import Category from "./pages/Category";
import Client from "./pages/Client";
import Home from "./pages/Home";
import User from "./pages/User";
import Aside from "./partials/Aside";
import Navbar from "./partials/Navbar";
function App() {
  return (
    <>
    <Navbar />
    <Aside />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/usuarios" element={<User />} />
      <Route path="/clientes" element={<Client />} />
      <Route path="/categorias" element={<Category />} />

    </Routes>
    </>
  );
}

export default App;
