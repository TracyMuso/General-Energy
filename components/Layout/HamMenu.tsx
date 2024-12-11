'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { HamburgerMenuIcon, CloseMenuIcon } from '../Icons'
import MobileNav from './MobileNav'

const HamMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, []);

  return (
    <div ref={menuRef}>
      <span
        className={isMenuOpen ? 'hidden' : 'lg:hidden cursor-pointer'}
        onClick={() => setIsMenuOpen(true)}
      >
        <HamburgerMenuIcon />
      </span>
      <span
        className={isMenuOpen ? 'cursor-pointer z-50 fixed top-12 right-8' : 'hidden'}
        onClick={() => setIsMenuOpen(false)}
      >
        <CloseMenuIcon />
      </span>
      {isMenuOpen && <MobileNav closeMenu={() => setIsMenuOpen(false)} />}
    </div>
  )
}

export default HamMenu