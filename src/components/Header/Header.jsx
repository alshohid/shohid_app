"use client";
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavItems from "../NavItems/NavItems";
import { useRootContext } from "@/Provider/context";
import Cookies from "js-cookie";
import useScrollUp from "@/hooks/useScrollUp";
import { useNavItems } from "../../hooks/useNavMenuItem";

const { main_logo, logo_light, logo_rtl } = headerData;

const Header = ({ dark, rtl }) => {
    const navItems = useNavItems();
    const [isLogin, setIsLogin] = useState(false);
    const [mounted, setMounted] = useState(false)
    const scrollToTop = useScrollUp(500)

      useEffect(() => {
        const token = Cookies.get("token");
        setIsLogin(!!token);
      }, []);

  useEffect(() => {
    setMounted(true)
  }, [])


  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();

  if (!mounted) {
    return null
  }

  return (
    <header
      className={`main-header sticky-header sticky-header--normal  ${
        scrollToTop ? "active" : ""
      }`}
    >
      <Container fluid>
        <div className="main-header__inner">
          <div className="main-header__logo">
            <Link href="/">
              <Image
                src={dark ? logo_light : rtl ? logo_rtl : main_logo}
                alt="news-backend"
                width={140}
              />
            </Link>
          </div>

          <nav className="main-header__nav main-menu">
            <ul className="main-menu__list">
              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}

              <li className="dot"></li>
            </ul>
          </nav>
          <div className="main-header__right">
            <div
              onClick={handleToggle}
              className="mobile-nav__btn mobile-nav__toggler"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link
              href="#"
              onClick={toggleSearch}
              className="search-toggler main-header__search"
            >
              <i className="icon-magnifying-glass" aria-hidden="true"></i>
              <span className="sr-only">Search</span>
            </Link>

            {isLogin ? (
              <div className="profile-container">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={40}
                  height={40}
                />
                <div className="profile-dropdown text-secondary">
                  <ul className="sub-menu">
                    <li>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link href="/settings">Settings</Link>
                    </li>
                    <li>
                      <Link href="/logout">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href="#"
                className="main-header__toggler"
                onClick={toggleSidebar}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            )}

            <Link href="contact" className="tolak-btn main-header__btn">
              <b>Discover More</b>
              <span></span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
