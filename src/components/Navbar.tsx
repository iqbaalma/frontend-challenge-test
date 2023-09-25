import { Layout } from "antd"
import "../styles/navbar.css"
import { Content } from "antd/es/layout/layout"
import { ReusableButtonFill, ReusableButtonStroke } from "../reusable/Button"

export default function Navbar(): JSX.Element {
    const handleButtonClick = () => {
        alert('Tombol ditekan!');
      };

    return (
      <>
      <Layout className="container-nav">

        <div className="logo-nav">
            <Content>
                <span className="">News</span>
                <span className="">API</span>
            </Content>
        </div>

        <div className="link-directions-nav">
            <Content className="link-nav">Get Started</Content>
            <Content className="link-nav"> Documentation</Content>
            <Content className="link-nav">Pricing</Content>
        </div>
            
        <div className="cta-btn-nav">
            <ReusableButtonStroke text="Login" onClick={handleButtonClick}/>
            <ReusableButtonFill text="Get API Key" onClick={handleButtonClick}/>
        </div>
      </Layout>
      </>
    )
  }