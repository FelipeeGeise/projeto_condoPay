import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Aside from "./Asides";
import Article from "./article";

export default function Main() {
  const [active, setActive] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleClick = (key: string) => {
    if (key === "unidade") {
      router.push("/unidade");
    } else {
      setActive(key);
    }
  };

  return (
    <main className={styles.main}>
      <ul className={styles.userList}>
        {[
          { key: "condominio", label: "Condomínio", icon: "/img/Group.png" },
          { key: "unidade", label: "Unidades", icon: "/img/Unidade.png" },
          { key: "usuarios", label: "Usuários", icon: "/img/usuario.png" },
        ].map(({ key, label, icon }) => (
          <li
            key={key}
            className={active === key ? styles.active : ""}
            onClick={() => handleClick(key)}
          >
            <Image src={icon} alt={label} width={23} height={21} />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.infoBox}>
        <p className={styles.infoTitle}>Informações gerais</p>
        <button className={styles.infoButton} onClick={() => setShowModal(true)}>
          <Image src="/img/sairvermelho.png" alt="sair" width={18} height={18} />
          <span className={styles.whiteText}>Deixar o Condomínio</span>
        </button>
        <p>Colaboradores</p>
      </div>

      <div className={styles.flexGeral}>
        <div className={styles.avatars}>
          <div className={styles.texteum}>
            <div className={styles.logosavatar}>
              <div className={styles.avatarum}>
                <Image src="/img/fotocondominio.png" alt="Foto" width={101} height={101} />
                <p>Foto do Condomínio</p>
              </div>
              <div className={styles.avatardois}>
                <Image src="/img/logocondominio.png" alt="Logo" width={101} height={101} />
                <p>Logo do Condomínio</p>
              </div>
            </div>
            <p className={styles.editar}>Editar</p>
          </div>

          <div className={styles.textdois}>
            <div className={styles.unirdiv}>
              <div className={styles.registro}>
                <div className={styles.registroItem}>
                  <h2>Nome</h2>
                  <p>Condomínio Edifício Princesa Isabel</p>
                </div>
                <div className={styles.registroItem}>
                  <h2>Telefone</h2>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className={styles.registrodois}>
                <div className={styles.registroItem}>
                  <h2>CNPJ</h2>
                  <p>28.638.302/0001-09</p>
                </div>
                <div className={styles.registroItem}>
                  <h2>Tipo de condomínio</h2>
                  <p>Apartamentos</p>
                </div>
              </div>
            </div>

            <div className={styles.endereçoItem}>
              <h2>Endereço</h2>
              <p>Rua Frei Luiz Alevato, nº 1237 - Pindamonhangaba - SP - 12345-678</p>
            </div>
          </div>
        </div>

        <Aside />
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)}>×</button>
            <h2>Tem certeza que quer deixar o condomínio?</h2>
            <p>Você perderá todos os acessos e registros referentes a este condomínio.</p>
            <div className={styles.modalButtons}>
              <button onClick={() => setShowModal(false)}>Não</button>
              <button onClick={() => alert("Condomínio deixado!")}>Sim</button>
            </div>
          </div>
        </div>
      )}

      <Article />
    </main>
  );
}
