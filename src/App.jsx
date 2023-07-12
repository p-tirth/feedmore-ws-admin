import Navbar from "./components/navbar";
import Hero from "./components/hero"
import { useState } from "react";
import InfoBox from "./components/infoBox";

export default function App() {
  const [socket,setSocket] = useState("");
  return (
    <>
    <Navbar onSocket={setSocket} />
    {socket && <Hero socket={socket}/>}
    </>
  )
}