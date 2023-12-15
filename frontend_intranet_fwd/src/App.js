import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/users/index"; // Ajusta la ruta según la ubicación de tu componente
import Navbar from "./components/NavBar/index";
import Formuser from "./components/formuser";
import InternalCommunicationsForm from "./components/internalcomunicationsform";
const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="users" element={<UserList />} />
        <Route path="users/new" element={<Formuser />} />
        {/* <Route path="communications" element={<InternalCommunications />} /> */}
        <Route path="communications/new" element={< InternalCommunicationsForm />} />
      </Route>
    </Routes>
  );
};

export default App;
