import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <button
        onClick={() => navigate(`/product/${product.id}`)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );
}
