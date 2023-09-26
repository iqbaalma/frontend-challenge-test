import { JSX } from "react/jsx-runtime"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import StartedPage from "./components/StartedPage"

function App(): JSX.Element {
  return (
    <>
    <Navbar />
    <Sidebar activeKey="home" setActiveKey={() => {}} />
    <StartedPage />
    </>
  ) 
}

export default App
