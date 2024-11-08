import React, { useEffect, useState } from "react";

// create your App component here
function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://dog.ceo/api/breeds/image/random";
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
  }, []);
  return (
    <p>{loading ? "Loading..." : <img src={dogImage} alt="A Random Dog" />}</p>
  );
}
export default App;
