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
    <div className={styles.container}>
      <Head>
        <title>Pet Name Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pet Name Generator</h1>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            name="animal"
            placeholder="Write something related to animals"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Generate a name
          </button>
        </form>
        {result && <div className={styles.result}>{result}</div>}
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          text-align: center;
          font-family: 'Quicksand', sans-serif;
        }

        .title {
          font-size: 2.5em;
          color: #333;
          margin-bottom: 20px;
        }

        .form {
          margin-bottom: 30px;
        }

        .input {
          width: 100%;
          padding: 10px;
          font-size: 1em;
        }

        .button {
          background-color: #1e90ff;
          color: #fff;
          padding: 10px 15px;
          font-size: 1em;
          cursor: pointer;
        }

        .result {
          font-size: 1.2em;
          color: #555;
        }
      `}</style>
    </div>
  );
}
