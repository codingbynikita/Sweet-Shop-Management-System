import { useState, useEffect } from "react";
import api from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSweet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sweet, setSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  async function loadSweet() {
    const res = await api.get(`/sweets`);
    const item = res.data.find((s) => s.id === Number(id));
    setSweet(item);
  }

  useEffect(() => {
    loadSweet();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/sweets/${id}`, sweet);

    alert("Sweet updated!");
    navigate("/");
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Edit Sweet</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg max-w-md space-y-4"
      >
        <input
          className="w-full p-3 rounded-lg border"
          value={sweet.name}
          onChange={(e) => setSweet({ ...sweet, name: e.target.value })}
          required
        />

        <input
          className="w-full p-3 rounded-lg border"
          value={sweet.category}
          onChange={(e) => setSweet({ ...sweet, category: e.target.value })}
          required
        />

        <input
          type="number"
          className="w-full p-3 rounded-lg border"
          value={sweet.price}
          onChange={(e) => setSweet({ ...sweet, price: e.target.value })}
          required
        />

        <input
          type="number"
          className="w-full p-3 rounded-lg border"
          value={sweet.quantity}
          onChange={(e) => setSweet({ ...sweet, quantity: e.target.value })}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
