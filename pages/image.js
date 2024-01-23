import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    if (!animalInput.trim()) {
      setImageURL("");
      return;
    }
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setImageURL(data.imageURL || "");
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>Image generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Image generator</h1>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            name="animal"
            placeholder="Description of an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button type="submit">Generate an image!</button>
        </form>
        {imageURL && <img src={imageURL} className={styles.animalImage} alt="Animal Image" />}
      </main>
    </div>
  );
}