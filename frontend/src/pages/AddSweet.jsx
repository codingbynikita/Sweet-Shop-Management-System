import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddSweet() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/sweets", {
      name,
      category,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    });

    alert("Sweet added!");
    navigate("/"); // go back to home
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Add New Sweet</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg max-w-md space-y-4"
      >
        <input
          className="w-full p-3 rounded-lg border"
          placeholder="Sweet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full p-3 rounded-lg border"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="number"
          className="w-full p-3 rounded-lg border"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="number"
          className="w-full p-3 rounded-lg border"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
        >
          Add Sweet
        </button>
      </form>
    </div>
  );
}
