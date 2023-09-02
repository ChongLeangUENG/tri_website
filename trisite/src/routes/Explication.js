import React from "react";
import NavBar from "../components/NavBar";
import ExpImg from "../assets/BackgroundHome.avif";
import ForExplication from "../components/ForExplication";

function Explication() {
  return (
    <>
      <NavBar />
      <ForExplication
        cName="forexplication"
        resumeImg={ExpImg}
        title={
          <>
            QU'EST-CE QUE LE TAUX DE RENTABILITÉ INTERNE (TRI)
            <br />
            APPLIQUÉ A L'ÉVALUATION DES ACTIONS EN BOURSE?
          </>
        }
        text1={`Le taux de rentabilité interne (TRI) est un instrument couramment utilisé pour sélectionner des investissements industriels en gestion financière d'entreprise. C'est le taux d'actualisation qui permet d'égaliser le montant d'un investissement industriel avec le flux de cash flows nets prévisionnels provenant de cet l'investissement sur sa durée de vie.`}
        text2={
          <>
            On peut adapter ce TRI utilisé en gestion financière d’entreprise
            pour en faire un instrument tout aussi opérationnel dans le domaine
            de la gestion de valeurs mobilières.
            <br />
            <br />
            Sachant que la valeur d'une action reflète avant tout la capacité
            bénéficiaire d'une entreprise le TRI permet d'intégrer explicitement
            cette capacité bénéficiaire et donc d'évaluer l'action d'une manière
            plus complète que le traditionnel PER ou multiple de capitalisation
            des bénéfices.
            <br />
            <br />
            Par rapport au TRI en gestion financière d'entreprise, la "durée de
            vie" de l’investissement industriel est remplacée par la durée de
            l’investissement en Bourse qui permettra à l’acheteur d’une action
            de doubler potentiellement sa mise sous la forme d’un cumul des
            bénéfices par action actualisés. Il s'agit d'un retour potentiel sur
            investissement dans l'hypothèse d'une entreprise qui distribuerait
            tous ses bénéfices en toute transparence à ses actionnaires. C'est
            la façon la plus directe pour mesurer la capacité bénéficiaire d'une
            société qui détermine la valeur de son action en Bourse.
            <br />
            <br />
            A la différence d'un investissement industriel qui a une durée de
            vie limitée, l'action d'une société achetée en Bourse garde toujours
            une valeur tant que la société conserve une capacité bénéficiaire
            (nonobstant d'autres facteurs comme la valeur de ses actifs).
            <br />
            <br />
            La durée d'un investissement dans une action permettant à
            l'investisseur de doubler potentiellement sa mise comme précisé plus
            haut peut être calculée avec précision à partir du PER initial de
            l’action, du taux de croissance attendue des bénéfices et du taux
            d’intérêt des obligations à long terme qui sert à actualiser le flux
            des bénéfices futurs.
            <br />
            <br />
            A partir de cette durée d’investissement qui est propre à chaque
            action, on déduit un taux de rentabilité interne (TRI) qui est
            également propre à chaque action.
            <br />
            <br />
            Exprimé en pourcentage et instantanément calculé par l'ordinateur le
            TRI est un instrument d'évaluation synthétique qui permet de
            comparer et de sélectionner les actions d'une manière plus
            rigoureuse et plus significative que l'approche traditionnelle basée
            sur le PER.
            <br />
            <br />
            Pour plus de détails cliquer sur le lien ci dessous
          </>
        }
        text3="COMMENT UTILISER LE TAUX DE RENTABILITE INTERNE (TRI) COMME INSTRUMENT D'EVALUATION DES ACTIONS"
      />
      <footer style={{ textAlign: "center", margin: "20px 0", color: "black" }}>
        © {new Date().getFullYear()} Sam Rainsy. Tous droits réservés.
      </footer>
    </>
  );
}

export default Explication;
