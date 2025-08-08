"use client";
import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";

const links = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/portfolio", title: "Portfolio" },
  { id: 3, url: "/blog", title: "Blog" },
  { id: 4, url: "/about", title: "About" },
  { id: 5, url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const handleLogout = () => {
    // logout logic
    alert("Logged out!");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">ByAdeen</Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
