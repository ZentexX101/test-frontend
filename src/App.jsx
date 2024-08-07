import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error fetching the message!", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">{message}</h1>
        <p className="text-lg text-gray-700">
          This is a React application configured with Vite and styled with
          Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default App;
