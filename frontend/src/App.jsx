import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddSweet from "./pages/AddSweet";
import EditSweet from "./pages/EditSweet";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 bg-purple-700 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Sweet Shop 🍬</h1>

        <Link to="/add">
          <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold">
            Add Sweet
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSweet />} />
        <Route path="/edit/:id" element={<EditSweet />} />
      </Routes>
    </BrowserRouter>
  );
}
