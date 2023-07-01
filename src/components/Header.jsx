import logo from "../img/logo.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="" />
      <h1 className="title">Squid Games Store</h1>
    </header>
  );
}

export default Header;
