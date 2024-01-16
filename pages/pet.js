import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    if (!animalInput.trim()) {
      setResult("Type a name of an animal");
      return;
    }
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result || "There is no input");
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>Pet name generator?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Pet name generator</h1>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            name="animal"
            placeholder="Write something related to animals"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button type="submit">Generate a name</button>
        </form>
        {result && <div className={styles.result}> {result}</div>}
      </main>
    </div>
  );
}