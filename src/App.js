import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
