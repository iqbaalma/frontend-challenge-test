import "../styles/footer.css"

export default function Footer(): JSX.Element {
    return (
        <>
            <footer className="footer-container">
                <div className="list-menu-footer">
                    <h2 style={{ cursor: 'default', color: 'white' }}>News API</h2>
                    <a>Get started</a>
                    <a>Documentation</a>
                    <a>News sources</a>
                    <a>Pricing</a>
                    <a>Google News API</a>
                </div>
                <div className="list-menu-footer">
                    <h2 style={{ cursor: 'default', color: 'white' }}>Company</h2>
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                </div>
                <div className="list-menu-footer-dif">
                    <h2 style={{ cursor: 'default', color: 'white' }}>Support</h2>
                    <a>Contact</a>
                    <a>Twitter</a>
                    <br/>
                    <a>Github</a>
                </div>
            </footer>
        </>
    )
}