import { useState } from "react";
import content from "../data/content.json";

const Navbar = () => {
  const { logo, brandName, navItems, buttons, mobileMenu, styles } =
    content.navbar;
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center flex-shrink-0">
            <img src={logo.src} alt={logo.alt} className={styles.logo} />
            <span className={styles.brand}>{brandName}</span>
          </a>
          <ul className={styles.desktopNav}>
            {navItems.map((nav, index) => (
              <li key={index}>
                <a href={nav.href}>{nav.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href={buttons.signIn.href} className={buttons.signIn.style}>
              {buttons.signIn.label}
            </a>
            <a
              href={buttons.createAccount.href}
              className={buttons.createAccount.style}
            >
              {buttons.createAccount.label}
            </a>
          </div>
          <div className={styles.menuButton}>
            <button onClick={toggleNavbar}>
              {mobileMenuOpen ? mobileMenu.closeIcon : mobileMenu.menuIcon}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            <ul>
              {navItems.map((nav, index) => (
                <li className="py-2 text-center" key={index}>
                  <a href={nav.href}>{nav.label}</a>
                </li>
              ))}
            </ul>
            <div className="py-4 flex justify-center space-x-6 items-center">
              <a href={buttons.signIn.href} className={buttons.signIn.style}>
                {buttons.signIn.label}
              </a>
              <a
                href={buttons.createAccount.href}
                className={buttons.createAccount.style}
              >
                {buttons.createAccount.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
