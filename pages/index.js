import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";


export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Start</title>
        <meta name="description" content="Landing page" />
      </Head>

      <div className={styles.mainContent}>
        <h1 className={styles.title}>Welcome</h1>

        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Write your name"
          className={styles.input}
        />

        <p className={styles.greeting}>Welcome {name || 'guest'}!</p>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/landing-page">
                <a>Landing page</a>
              </Link>
            </li>
            <li>
              <Link href="/pet">
                <a>Pet name generator</a>
              </Link>
            </li>
            <li>
              <Link href="/image">
                <a>Pet image generator</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

