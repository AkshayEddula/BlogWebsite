import Link from "next/link";
import React from "react";
import "@styles/globals.css";

const Footer = () => {
  return (
    <footer>
      <h2 className="mr-3">&copy; 2023</h2>
      <Link className="text-[#C4320A] font-bold text-xl" href="/">
        Home
      </Link>
      <Link href="/">Twitter</Link>
      <Link href="/">Linkden</Link>
      <Link href="/">Instagram</Link>
      <Link href="/">Email</Link>
    </footer>
  );
};

export default Footer;
