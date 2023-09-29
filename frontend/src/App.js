import { useEffect , useState} from "react";
import axios from 'axios';
import Button from "./components/button";
import Navbar from "./components/navbar";
import Grid from "./components/grid";


function App() {

  const [photos, setPhotos] = useState([]);
  const [updateUI, setupdateUI] = useState("");
  useEffect(() => {
    axios.get('http://localhost:5000/api/get')
    .then((res) => {
      console.log(res.data);
      setPhotos(res.data)
    })
    .catch((err) => console.log(err))

  }, [updateUI]);

  return (
    <div className="App">
     <Navbar/>
     <Grid photos ={photos}/>
     <Button setupdateUI={setupdateUI}/>
     
    </div>
  );
}

export default App;
