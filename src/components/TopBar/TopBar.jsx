"use client";
import headerData from "@/data/HeaderData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const { icons, links } = headerData;

const TopBar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLogin(!!token);
  }, []);

  const handleLogout = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/user/login`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (result.status === "success" && response.ok) {
      Cookies.remove("token");
      router.replace("/");
    } else {
      console.error("Logout failed", result.message);
    }
  };
  return (
    <div className="topbar-one" id="home">
      <Container>
        <div className="topbar-one__inner">
          <ul className="list-unstyled topbar-one__info">
            {icons.map(({ id, icon, content, subHref, href }) => (
              <li key={id} className="topbar-one__info__item">
                <i className="topbar-one__info__icon">
                  <FontAwesomeIcon icon={icon} />
                </i>

                <Link target="_blank" href={subHref ? `${subHref}:${content}` : href}>
                  {content}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="topbar-one__links">
            {isLogin ? (
              <>
                <button
                  onClick={handleLogout}
                  className="tolak-btn "
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                {links.map(({ id, name, href }) => (
                  <li key={id}>
                    <Link href={`/${href}`}>{name}</Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
