import { useParams } from "react-router-dom";

const productData = {
  1: { name: "Product A", price: "$20", description: "This is Product A." },
  2: { name: "Product B", price: "$30", description: "This is Product B." },
  3: { name: "Product C", price: "$40", description: "This is Product C." },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <div className="text-center mt-10">Product not found!</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="mt-4 text-lg font-semibold">{product.price}</p>
      </div>
    </div>
  );
}
