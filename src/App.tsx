import { JSX } from "react/jsx-runtime"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App(): JSX.Element {
  return (
    <>
    <Navbar />
    <Sidebar activeKey="home" setActiveKey={() => {}} />
    </>
  ) 
}

export default App
