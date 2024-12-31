export default function Navbar() {
  return (
    <nav className="nav">
      <img
        src="/src/assets/img/Snake-Sanctuary-Logo-Transparent.webp"
        alt="Logo"
        className="nav__logo"
        id="logo"
      />
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link" href="#about-section">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#inventory-section">
            Inventory
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="#faq-section">
            FAQ
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact-section">
            Contact Us
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link nav__link--btn nav__link--btn-donation"
            href="#section--5"
          >
            Make a Donation!
          </a>
        </li>
      </ul>
    </nav>
  );
}
