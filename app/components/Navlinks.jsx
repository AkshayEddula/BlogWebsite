"use client";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Link from "next/link";
import "@styles/globals.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Navlinks = ({ categories }) => {
  const router = useRouter();
  const [togglecat, settogglecat] = useState(false);
  const [tooglemob, settooglemob] = useState(false);
  const [toogleTheme, settoogleTheme] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      settooglemob(false);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (tooglemob) {
      settooglemob(!tooglemob);
    }
  }, [router.asPath]);

  return (
    <>
      <div className="navlinks2">
        <Link href="/">Home</Link>
        <Link
          href="/"
          onMouseEnter={() => settogglecat(true)}
          onClick={() => settogglecat(!togglecat)}
        >
          Categories
        </Link>
        <Link href="/about">About</Link>
        <Link href="/Newsletter">Newsletter</Link>
        <div className="mode_toggle">
          <FiSun className="icons" />
          <HiOutlineMoon className="icons" />
        </div>
      </div>
      <div className={`mainnav ${tooglemob ? "flex" : "hidden"}`}>
        <div className="navlinks">
          <Link href="/">Home</Link>
          <Link
            href=""
            onMouseEnter={() => settogglecat(true)}
            onClick={() => settogglecat(!togglecat)}
          >
            Categories
          </Link>
          <Link href="/about">About</Link>
          <Link href="/Newsletter">Newsletter</Link>
          <div className="mode_toggle">
            <FiSun className="icons" />
            <HiOutlineMoon className="icons" />
          </div>
          <RxCross1 onClick={() => settooglemob(false)} className="cross" />
        </div>
      </div>
      <RxHamburgerMenu
        onClick={() => settooglemob(true)}
        className="hamburger"
      />
      {togglecat ? (
        <div
          onMouseLeave={() => settogglecat(false)}
          onMouseEnter={() => settogglecat(true)}
          className="categories"
        >
          {categories.map((category) => (
            <Link
              className="cat-link"
              key={category.id}
              href={"/categories/" + category.slug}
            >
              {category.name}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navlinks;
