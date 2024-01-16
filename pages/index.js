import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Welcome to the Home Page</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
