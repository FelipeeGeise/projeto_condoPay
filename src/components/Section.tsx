"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Section() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const items = [
    { text: "Painel Gerencial", img: "/img/painel.png", route: "/painel" },
    { text: "Condomínio", img: "/img/condominio.png", route: "/main" },
    { text: "Contas a pagar", img: "/img/contasPagar.png", route: "/contas-pagar" },
    { text: "Contas a receber", img: "/img/contasReceber.png", route: "/contas-receber" },
    { text: "Consumo", img: "/img/consumo.png", route: "/consumo" },
    { text: "Inteligência Artificial", img: "/img/ia.png", route: "/ia" },
    { text: "Relatório", img: "/img/relatorio.png", route: "/relatorio" },
    { text: "Previsão Orçamentária", img: "/img/previsao.png", route: "/previsao" },
  ];

  const handleClick = (index: number, route: string) => {
    setActiveIndex(index);
    router.push(route);
  };

  return (
    <section className={styles.section}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.itemBox} ${activeIndex === index ? styles.active : ""}`}
          onClick={() => handleClick(index, item.route)}
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
