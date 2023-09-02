import React from "react";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import HomeImg from "../assets/BackgroundHome.avif"

function Home() {
  return (
    <>
      <NavBar />
      <Resume
        cName="resume"
        resumeImg={HomeImg}
        title={
          <>
            Ce site a pour but d'aider les investisseurs à sélectionner les
            actions cotées en Bourse
            <br />
            sur la base de leur taux de rentabilité interne (TRI)
          </>
        }
        subtitle="RÉSUMÉ"
        ssubtitle="LE TAUX DE RENTABILITÉ INTERNE (TRI) APPLIQUÉ A L'ÉVALUATION DES ACTIONS"
        text={`On peut adapter le TRI utilisé en gestion financière d’entreprise pour en faire un instrument tout aussi opérationnel dans le domaine de la gestion des valeurs mobilières. Sachant que la valeur d'une action reflète avant tout la capacité bénéficiaire d'une entreprise, le TRI permet d'intégrer explicitement cette capacité bénéficiaire et donc d'évaluer l'action d'une manière plus complète que le traditionnel PER ou multiple de capitalisation des bénéfices. 
      Par rapport au TRI en gestion financière d'entreprise, la "durée de vie" de l’investissement industriel est remplacée par la durée de l’investissement en Bourse qui permettra à l’acheteur d’une action de doubler potentiellement sa mise sous la forme d’un cumul des bénéfices par action actualisés. Cette durée d’investissement peut être calculée avec précision à partir du PER initial de l’action, du taux de croissance attendue des bénéfices et du taux d’intérêt des obligations à long terme qui sert à actualiser le flux des bénéfices futurs. A partir de cette durée d’investissement qui est propre à chaque action, on déduit un taux de rentabilité interne (TRI) qui est également propre à chaque action. Exprimé en pourcentage et instantanément calculé par l'ordinateur, le TRI est un instrument d'évaluation synthétique qui permet de comparer et de sélectionner les actions d'une manière significative.`}
      />
      <footer style={{ textAlign: "center", margin: "20px 0", color: "black" }}>
        © {new Date().getFullYear()} Sam Rainsy. Tous droits réservés.
      </footer>
    </>
  );
}

export default Home;
