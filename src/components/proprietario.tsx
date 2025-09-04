import Image from "next/image";
import styles from '@/styles/Home.module.css';

export default function ProprietarioPage() {
  return (
    <>
      <div className={styles.divProprietario}>
        <div className={styles.divProprietarioContent}>
          <Image src="/img/pro.png" alt="proprietario" width={30} height={30} />
        <h2>Proprietários, inquilinos e outros contatos</h2>
        </div>

        <div className={styles.divProprietarioContentDois}> 
          <Image src="/img/maos.png" alt="maos" width={30} height={30} />
          <h3>Alterar proprietário</h3>
        </div>

        <div>
          <h4>+</h4>
        </div>
       
      </div>
    </>
  );
}