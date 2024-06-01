import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8000/gallery/1");
    setData(response.data);
  }

  useEffect(() => {
    fetchAPI(); // Call fetchAPI function
  }, []); // Empty dependency array to run only once

  console.log(data);
  
  return (
    <>
    {data.map((item, index) => (
        <div key={index}>
          
          <img key={index} width="300px" src={item.file} alt="" />
        </div>
      ))}

    </>
  );
}

export default App;
