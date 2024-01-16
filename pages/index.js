import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Esta es la página de inicio de mi aplicación" />
      </Head>

      <h1>Bienvenido a mi aplicación</h1>
      <p>¡Gracias por visitarnos!</p>

      <input type="text" value={name} onChange={handleChange} placeholder="Ingresa tu nombre" />

      <p>Hola, {name}!</p>

            <nav>
              <ul>
                <li>
                  <Link href="/about">
                    <a>Acerca de</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contacto</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pet">
                    <a>Pet name generator. As amazing as it sounds.</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      }