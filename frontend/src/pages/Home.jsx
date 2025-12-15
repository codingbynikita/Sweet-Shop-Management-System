import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import SweetCard from "../components/SweetCard";

export default function Home() {
  const navigate = useNavigate();   // ✅ Move inside component!!!

  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");

  async function loadSweets() {
    const res = await api.get("/sweets");
    setSweets(res.data);
  }

  useEffect(() => {
    loadSweets();
  }, []);

  const filtered = sweets.filter((sweet) =>
    sweet.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleEdit(sweet) {
    navigate(`/edit/${sweet.id}`); 
  }

  async function handlePurchase(id) {
    await api.post(`/sweets/${id}/purchase`);
    loadSweets();
  }

  async function handleDelete(id) {
  await api.delete(`/sweets/${id}`);
  loadSweets(); // refresh list
}


  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">
        Sweet Shop Dashboard 🍬
      </h1>

      <input
        className="w-full p-3 rounded-xl border shadow-sm mb-6"
        placeholder="Search sweets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((sweet) => (
          <SweetCard
            key={sweet.id}
            sweet={sweet}
            onPurchase={() => handlePurchase(sweet.id)}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
