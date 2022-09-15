import '../App.css';
import 'bootstrap';

const Comp_Footer = () => {
    return(
        <footer className={"fixed-bottom"}>
            <h1 className={"navbar-brand bg-black text-white"}>Social Media</h1>
            <div className={"fixed-bottom d-grid gap-lg-5 justify-content-center"}>
                <nav className={"navbar navbar-expand-lg"}>
                    <div className={"container-fluid justify-content-center"}>
                        <ul className={"navbar-nav"}>
                            <li className={"nav-item me-lg-5"}>
                                <a type="button" className="btn btn-outline-primary" href={"https://github.com/MugenZeta"}>
                                    Github
                                </a>
                            </li>
                            <li className={"nav-item me-lg-5"}>
                                <a type="button" className="btn btn-outline-primary" href={"https://www.facebook.com/harold.garner.121"}>
                                    Facebook
                                </a>
                            </li>
                            <li className={"nav-item me-lg-5"}>
                                <a type="button" className="btn btn-outline-primary" href={"https://www.linkedin.com/in/harold-g-357923121/"}>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export default Comp_Footer;