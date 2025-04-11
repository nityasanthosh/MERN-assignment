import {useState} from "react";
export default function TextUpdater() {
    const [text, setText] = useState("");
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <input
          type="text"
          className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setText(e.target.value)}
        />
        <p className="mt-4 text-lg font-semibold">{text}</p>
      </div>
    );
  }