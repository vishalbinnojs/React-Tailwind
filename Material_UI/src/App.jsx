import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Stack from "@mui/material/Stack";
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"

function App() {
 

  return (
    <>

     <Navbar />
     <Stack direction="row" justifyContent={"space-between"}>
     <Sidebar />
     <Feed />
     <RightBar />
     </Stack>

    </>
  );
}

export default App;
