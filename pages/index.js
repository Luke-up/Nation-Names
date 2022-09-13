import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = React.useState("");

  return (
    <div className="container border p-2 border-secondary rounded bg-white mt-2">
      <h1>Explore the world of names</h1>
      <p>Other stuff</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <Link href={"/" + name}>
        <a>Submit</a>
      </Link>
    </div>
  );
}
