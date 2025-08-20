import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo da empresa */}
      <Image
        src="/img/logoEmpresa.png"
        alt="empresa"
        width={102}
        height={102}
      />

      {/* Input de busca */}
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${styles.searchInput}`}
          placeholder="Acesso rápido"
        />
        <span className="input-group-text" style={{ cursor: "pointer" }}>
          <i className="bi bi-search"></i>
        </span>
      </div>

      {/* Informações do usuário */}
      <div className={styles.userInfo}>
        <Image src="/img/admAlfa.png" alt="adm" width={50} height={50} />
        <p style={{ fontSize: "20px", width: "194px" }}>
          Administradora Alfa
        </p>
      </div>

      <div className={styles.userInfo}>
        <Image src="/img/RafaCondo.png" alt="adm" width={50} height={50} />
        <p style={{ fontSize: "20px", width: "194px" }}>Rafael eCondos</p>
      </div>

      {/* Sino de notificações */}
      <div className={styles.userSino}>
        <Image src="/img/sino.png" alt="sino" width={27} height={33} />
      </div>

      {/* Botão sair */}
      <div className={styles.userSair}>
        <Image src="/img/sair.png" alt="sair" width={35} height={35} />
        <p>Sair</p>
      </div>
    </header>
  );
}
