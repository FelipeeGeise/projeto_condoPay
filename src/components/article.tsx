"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";




export default function Article() {
  // Controla se a modal de edição está aberta
  const [showForm, setShowForm] = useState(false);

  // Valores salvos (persistidos no localStorage)
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  // Valores temporários durante a edição
  const [tempTitle, setTempTitle] = useState("");
  const [tempInfo, setTempInfo] = useState("");

  // Carrega os dados do localStorage ao montar o componente
  useEffect(() => {
    const savedTitle = localStorage.getItem("title"); // lê título salvo
    const savedInfo = localStorage.getItem("info");   // lê informação salva
    if (savedTitle) setTitle(savedTitle);            // se existir, define o estado
    if (savedInfo) setInfo(savedInfo);
  }, []);

  // Abre a modal e inicializa os valores temporários
  function openForm() {
    setTempTitle(title); // inicializa com título atual
    setTempInfo(info);   // inicializa com informação atual
    setShowForm(true);   // abre a modal
  }

  // Fecha a modal (X ou Cancelar)
  function handleClose() {
    setShowForm(false);  // apenas fecha a modal sem alterar os valores salvos
  }

  // Salva os valores temporários nos estados principais e no localStorage
  function handleSave() {
    setTitle(tempTitle);             // atualiza título
    setInfo(tempInfo);               // atualiza informação
    localStorage.setItem("title", tempTitle); // salva no navegador
    localStorage.setItem("info", tempInfo);
    setShowForm(false);              // fecha a modal
  }

  return (
    <div className={styles.infoAdicional}>
      {/* Título da seção */}
      <h2>Informações Adicionais</h2>

      <div className={styles.caixaDeInformacoes}>
        {/* Exibe o título atual e botão de editar */}
        <div className={styles.adicionar}>
          <h2>{title || "Sem título"}</h2>
          {/* Botão de editar abre a modal */}
          <p onClick={openForm} style={{ cursor: "pointer" }}>Editar</p>
        </div>

        {/* Exibe a informação atual */}
        <div className={styles.textoAdicional}>
          <p>{info || "Sem informação"}</p>
        </div>
      </div>

      {/* Modal de edição */}
      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formBox}>
            {/* X no canto para fechar a modal */}
            <button
              className={styles.closeButton}
              onClick={handleClose} // fecha a modal sem salvar
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            {/* Título da modal */}
            <h2>Informações adicionais</h2>

            {/* Input para editar o título */}
            <div>
              <label>Qual é o título?</label>
              <input
                type="text"
                value={tempTitle} // valor temporário
                onChange={(e) => setTempTitle(e.target.value)} // atualiza temporário
              />
            </div>

            {/* Input para editar a informação */}
            <div>
              <label>Qual é a informação?</label>
              <input
                type="text"
                value={tempInfo} // valor temporário
                onChange={(e) => setTempInfo(e.target.value)} // atualiza temporário
              />
            </div>

            {/* Botões Cancelar e Salvar lado a lado */}
            <div
              className={styles.buttons}
              style={{ marginTop: "10px", display: "flex", gap: "10px" }}
            >
              {/* Botão Cancelar fecha a modal sem salvar */}
              <button
                onClick={handleClose} 
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #ccc",
                  width: "113px",
                  height: "46px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FDC816")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Cancelar
              </button>

              {/* Botão Salvar aplica alterações */}
              <button
                onClick={handleSave} 
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #ccc",
                  width: "113px",
                  height: "46px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FDC816")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
