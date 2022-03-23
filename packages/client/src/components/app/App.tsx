import React , { useState } from 'react';
import Header from './sections/Header';
import './App.css';

export default function App() {
  // const [apiResponse, setApiResponse] = useState("");
  
  // const onCallApi = async () => {
  //   try {
  //     const response = await fetch('/api', {
  //       method: "GET",
  //     });
  //     const text = await response.text();
  //     console.log(text);
  //     setApiResponse(text);
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  return (
    <div className="App">
      <Header />
    </div>
  );
}
