import { useEffect } from 'react'
import './App.css';
import Header from './sections/Header';
import About from './sections/About';
import { App_Name } from '@portfolio/common'

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

  useEffect(() => {
    document.title = App_Name
  })

  return (
    <div className="App">
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}
