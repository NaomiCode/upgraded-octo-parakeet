import './layout.css';

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div className="container">
            <main>
                {children}
            </main>
            <footer className={"mt-auto"}>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;