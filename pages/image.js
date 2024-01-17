import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
export default function RandomImageGenerator() {

  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  async function generateRandomImage() {

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: imageName }),

      });

      if (!response.ok) {
        throw new Error("Error generating an image.");

      }
      const data = await response.json();
      setImage(data.image);
      setError(null); // Limpiar errores anteriores en caso de éxito

    } catch (error) {
      console.error("Error fetching image:", error);
      setError("Error, try again.");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Image generator</title>
        <link rel="icon" href="https://example.com/favicon.ico" />
      </Head>
      <section className={styles.main} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <h1 className={styles.title} style={{ color: '#ff5a5f' }}>Image generator</h1>
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); generateRandomImage(); }}>
          <label htmlFor="imageName" className={styles.label} style={{ color: '#333' }}>Name of the image:</label>
          <input
            type="text"
            id="imageName"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            className={styles.input}
            style={{ borderColor: '#ff5a5f' }}
          />
          <button type="submit" className={styles.button} style={{ backgroundColor: '#ff5a5f', color: '#fff', marginTop: '10px' }}>Generar Imagen</button>
        </form>
        {image && (
          <div className={styles.imageContainer} style={{ marginTop: '20px' }}>
          <img
            src={image}
            alt={`Imagen ${imageName} generada`}
            className={styles.randomImage}
            style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }}
          />
          </div>
)}
      </section>
    </div>
  );  
}