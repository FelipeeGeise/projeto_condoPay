// src/components/NovaUnidade.tsx
import React from "react";
import styles from "@/styles/Home.module.css";

interface NovaUnidadeProps {
    onClose: () => void;
}

const NovaUnidade: React.FC<NovaUnidadeProps> = ({ onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>

                <div className={styles.divDisplayFlex}>
                    <section className={styles.sectionModalNovaUnidade}>

                        <div className={styles.divModalNovaUnidade}>
                            <label htmlFor="identificacao">Identificação</label>
                            <input id="identificacao" type="text" placeholder="Digite a identificação" />
                        </div>

                        <div className={styles.divModalNovaUnidade}>
                            <label htmlFor="bloco">Bloco</label>
                            <input id="bloco" type="text" placeholder="Digite o bloco" />
                        </div>

                        <div className={styles.divModalNovaUnidade}>
                            <label htmlFor="ramal">Ramal</label>
                            <input id="ramal" type="text" placeholder="Digite o ramal" />
                        </div>

                        <div className={styles.divModalNovaUnidade}>
                            <label htmlFor="meioEnvio">Meio de envio das cobranças</label>
                            <input id="meioEnvio" type="text" placeholder="Ex.: E-mail" />
                        </div>
                    </section>

                    <section>
                        <div className={styles.divModalNovaUnidadeDois}>
                            <label htmlFor="numero">Número</label>
                            <input id="numero" type="text" placeholder="Digite a identificação" />
                        </div>

                        <div className={styles.divModalNovaUnidadeDois}>
                            <label htmlFor="fracao">Fração ideal</label>
                            <input id="fracao" type="text" placeholder="Digite a Fração" />
                        </div>

                        <div className={styles.divModalNovaUnidadeDois}>
                            <label htmlFor="situaçao">Situação</label>
                            <input id="situacao" type="text" placeholder="Digite a Situação" />
                        </div>

                        <div className={styles.divModalNovaUnidadeDois}>
                            <label htmlFor="financeiro">Responsável Financeiro:</label>
                            <input id="finaceiro" type="text" placeholder="Responsável Financeiro" />
                        </div>

                    </section>

                </div>

                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default NovaUnidade;
