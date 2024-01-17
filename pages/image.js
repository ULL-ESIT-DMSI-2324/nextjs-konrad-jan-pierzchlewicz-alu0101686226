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
        <title>DMSI LAB: Generador de Imágenes de Animales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Generador de Imágenes de Animales</h1>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            name="animal"
            placeholder="Escribe un animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button type="submit">Generar Imagen</button>
        </form>
        {imageURL && <img src={imageURL} className={styles.animalImage} alt="Animal Image" />}
      </main>
    </div>
  );
}