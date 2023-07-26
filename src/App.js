import { useState , useEffect} from 'react';
import './App.css'
import axios from 'axios';

function App() {

const[ profileName,setProfileName]=useState("");
const[ profileCell,setProfileCell]=useState("");
const[ profileImage,setProfileImage]=useState("");
const[ profileEmail,setProfileEmail]=useState("");

const profileData = async()=>{

try {
  const res = await axios.get("https://randomuser.me/api");
  console.log(res);
} catch (error) {
 console.log("error");
  }
}
  return (
    <div className="App">

    </div>
  );
}

export default App;
