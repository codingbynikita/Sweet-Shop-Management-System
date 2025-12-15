export default function SweetCard({ sweet, onPurchase, onEdit, onDelete }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg transition hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-purple-700">{sweet.name}</h2>
      <p className="text-gray-500">{sweet.category}</p>

      <div className="mt-2">
        <p className="font-bold text-lg">₹{sweet.price}</p>
        <p className="text-gray-600">Qty: {sweet.quantity}</p>
      </div>

      <button
        className={`mt-4 px-4 py-2 rounded-lg text-white font-medium ${
          sweet.quantity > 0
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={onPurchase}
        disabled={sweet.quantity <= 0}
      >
        Purchase
      </button>

      <button
       className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
       onClick={() => onEdit(sweet)}
      >
       Edit
      </button>


      <button
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
  onClick={() => onDelete(sweet.id)}
>
  Delete
</button>

    </div>
    
  );
}
