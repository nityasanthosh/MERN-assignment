export default function Button() {
    return (
      <button
        onClick={() => console.log("Button clicked!")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Click Me
      </button>
    );
  }
  