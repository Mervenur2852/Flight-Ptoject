import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Map from "./pages/Map";
import List from "./pages/List";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFlights } from "./redux/actions";
import Modal from "./components/modal";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  });
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/List" element={<List />} />
        </Routes>
        <Modal />
      </main>
    </BrowserRouter>
  );
};

export default App;
