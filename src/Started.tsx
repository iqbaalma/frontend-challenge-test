import { JSX } from "react/jsx-runtime"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Started from "./components/StartedPage"
import "./App.css"

export default function StartedLayout(): JSX.Element {
  return (
    <>
    <Navbar />
    <Sidebar activeKey="home" setActiveKey={() => {}} />
    <Started />
    </>
  ) 
}
