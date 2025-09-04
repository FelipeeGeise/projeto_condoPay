/*import { useState } from "react";
import Image from "next/image";*/
import styles from "@/styles/Home.module.css";


export default function Aside() {

    return (
        <div className={styles.divColaboradores}>

            <div className={styles.sindico}>
                <h2>Síndico</h2>
                <p>Rafael eCondos</p>
            </div>
            <div className={styles.administrador}>
                <h2>Administradores</h2>
                <p>text</p>
            </div>
            <div className={styles.conselheiro}>
                <h2>Conselheiros</h2>
                <p>textdois</p>
            </div>
        </div>
    )
}