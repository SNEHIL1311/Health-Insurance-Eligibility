import { LOGO_URL } from "../data/constants";

const Header = () => {
    return (
        <div className="header">
            {/* Logo Section */}
            <div className="logo">
                <img src={LOGO_URL} alt="Logo" />
            </div>

            {/* Navigation Title */}
            <div className="nav-title">
                <p>Apna Health Insurance</p>
            </div>
        </div>
    );
};

export default Header;
