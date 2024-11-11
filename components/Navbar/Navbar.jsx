"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; 
import styles from "./Navbar.module.css";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/create'); 
  };

  const handleLogoClick = () => {
    router.push('/'); 
  };

  return (
    <nav className={`${styles.navbar} flex justify-between items-center`}>
      <div className={styles.navbarLogo} onClick={handleLogoClick}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className={styles.navbarCreate} onClick={handleClick}>
        <div className='navbarCreateIcon'>
          <FaPlus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
