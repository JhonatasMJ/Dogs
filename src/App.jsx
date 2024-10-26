import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { UserStorage } from "./Context/UserContext";
import Conta from "./Pages/Conta";
import ProtectedRoute from "./Routes/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserStorage> {/* Passei dentro de tudo, então vou ter acesso a ele no meu site todo */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login/>} /> {/* o * serve para falar que dentro do login vai ter mais rotas */}
          <Route path="/conta/*" element={<ProtectedRoute> <Conta /> </ProtectedRoute>} /> {/* Dentro da rota protegida ira ter a minha conta que ira ser acessada apenas se tiver logado */}

        </Routes>
        <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
