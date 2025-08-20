"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Section() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    { text: "Painel Gerencial", img: "/img/painel.png" },
    { text: "Condomínio", img: "/img/condominio.png" },
    { text: "Contas a pagar", img: "/img/contasPagar.png" },
    { text: "Contas a receber", img: "/img/contasReceber.png" },
    { text: "Consumo", img: "/img/consumo.png" },
    { text: "Inteligência Artificial", img: "/img/ia.png" },
    { text: "Relatório", img: "/img/relatorio.png" },
    { text: "Previsão Orçamentária", img: "/img/previsao.png" },
  ];

  return (
    <section className={styles.section}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.itemBox} ${
            activeIndex === index ? styles.active : ""
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <Image
            src={item.img}
            alt={item.text}
            width={33}
            height={36}
            className={styles.icon}
          />
          <span>{item.text}</span>
        </div>
      ))}
    </section>
  );
}
