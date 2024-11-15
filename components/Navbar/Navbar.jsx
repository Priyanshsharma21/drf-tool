"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; 
import styles from "./Navbar.module.css";
import { FaPlus } from "react-icons/fa6";
import { UserButton } from '@clerk/nextjs';

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
      
      <div className="flex items-center">
      
        <div className={styles.navbarCreate} onClick={handleClick}>
          <div className='navbarCreateIcon'>
            <FaPlus />
          </div>
        </div>

        <header className='text-[#e2e2e2] ml-5'>
            <UserButton afterSignOutUrl="/" />
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
