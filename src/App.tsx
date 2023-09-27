import { JSX } from "react/jsx-runtime"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import StartedPage from "./components/StartedPage"
import Footer from "./components/Footer"

function App(): JSX.Element {
  return (
    <>
    <Navbar />
    <Sidebar activeKey="home" setActiveKey={() => {}} />
    <StartedPage />
    <Footer />
    </>
  ) 
}

export default App
