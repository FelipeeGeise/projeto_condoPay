import Header from "@/components/header";
import Section from "@/components/Section";
import styles from '@/styles/Home.module.css';
import Link from "next/link";
import Image from "next/image";
import ProprietarioPage from "../components/proprietario";
import { useState } from "react";
import NovaUnidade from "@/components/NovaUnidade";

export default function UnidadePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <div className={styles.unidades}>
        <Section />

        <div className={styles.divUnidade}>
          <div>
            <nav className={styles.navMenu}>
              <Link href="/" className={styles.navButton}>
                <Image src="/img/Group.png" alt="group" width={20} height={20} /> Condomínio
              </Link>
              <Link href="/unidade" className={styles.navButton}>
                <Image src="/img/Unidade.png" alt="unidades" width={20} height={20} /> Unidade
              </Link>
              <Link href="/usuario" className={styles.navButton}>
                <Image src="/img/usuario.png" alt="usuarios" width={20} height={20} /> Usuário
              </Link>
            </nav>
          </div>

          <div style={{ padding: "2rem" }}>
            <div className={styles.divInputButton}>
              <input type="text" placeholder="Pesquise a unidade" />
              <button
                className={styles.buttonUnidade}
                onClick={() => setShowModal(true)}
              >
                Criar Unidades
              </button>
            </div>

            <div className={styles.divUnidadeCaixa}>
              <div className={styles.divNome}>
                <div className={styles.divNomeContent}>
                  <p>Pessoas</p>
                  <p>Unidades</p>
                  <p>Status</p>
                </div>

                <div className={styles.divParagrafoGeral}>
                  <div className={styles.divParagrafo}>
                    <p>2</p>
                    <p>A 01</p>
                    <p>Adimplente</p>
                  </div>
                  <div className={styles.divParagrafo}>
                    <p>3</p>
                    <p>A 02</p>
                    <p>Inadimplente</p>
                  </div>
                  <div className={styles.divParagrafo}>
                    <p>4</p>
                    <p>A 01</p>
                    <p>Adimplente</p>
                  </div>
                  <div className={styles.divParagrafo}>
                    <p>4</p>
                    <p>A 01</p>
                    <p>Adimplente</p>
                  </div>
                </div>
              </div>

              {/* SUA SECTION ORIGINAL MANTIDA */}
              <section className={styles.divLinhaInfor}>
                <div className={styles.divInformacoes}>
                  <div className={styles.divInfoContent}>
                    <div className={styles.imgIformacao}>
                      <Image src="/img/Unidade.png" alt="group" width={20} height={20} />
                      <p>A 02</p>
                      <p>Informações da Unidade</p>
                    </div>
                    <div className={styles.divBotao}>
                      <button>2ª VIA DE BOLETO</button>
                      <Image src="/img/Lapis.png" alt="group" width={20} height={20} />
                    </div>
                  </div>
                  <div className={styles.divInfoContentZero}>
                    <div className={styles.divInfoContentUm}>
                      <h2>Identificação</h2>
                      <p>A 02</p>
                      <h2>Bloco</h2>
                      <p>Bloco A</p>
                      <h2>Ramal</h2>
                      <p>20</p>
                      <h2>Meio de envio das cobranças</h2>
                      <p>E-mail</p>
                    </div>

                    <div className={styles.divInfoContentDois}>
                      <h2>Número</h2>
                      <p>10</p>
                      <h2>Fração Ideal</h2>
                      <p>7,6569679%</p>
                      <h2>Situação</h2>
                      <p>Inadimplente</p>
                      <h2>Responsável Financeiro</h2>
                      <p>Henry Joaquim Daniel Jesus</p>
                    </div>

                    <div className={styles.divInfoContentTres}>
                      <h2>Observação</h2>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Soluta tempora eaque quaerat, autem illum nihil veniam id
                        animi sed a cum? Culpa fugit et, sunt accusantium officiis
                        rem modi hic.
                      </p>
                    </div>

                    <div className={styles.editarInfo}>
                      <h2>Editar</h2>
                    </div>
                  </div>
                </div>
                <ProprietarioPage />
              </section>

              {/* NOVAUNIDADE APARECE QUANDO showModal É TRUE */}
              {showModal && <NovaUnidade onClose={() => setShowModal(false)} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
