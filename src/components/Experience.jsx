import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import versailles from "../assets/images/carrefour.png";
import tower from "../assets/images/tower.png";
import { useState } from "react";

const Experience = () => {
  const [arrowClicked, setArrowClicked] = useState(false);
  return (
    <>
      <div id="experience" className=" mx-auto flex flex-col pt-4 mt-10">
        {/* about me text */}
        <div className="flex flex-col items-center sm:mb-0 mb-3">
          <h3 className="text-white text-md sm:text-lg">Voice</h3>
          <h1 className="text-secondary text-3xl sm:text-5xl">Mes experiences</h1>
        </div>

        <div className="p-10 pt-20">
          <VerticalTimeline>
            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="De septembre 2023 à août 2024"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={versailles}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
              👩‍💼 Manager
              </h3>
              <h4 className="text-sm mt-1">
                Carrefour City Grenoble
              </h4>

              <h4 className="font-bold text-sm mt-3">
                <span className="font-normal">
                • Suivi des niveaux de stock et gestion des réapprovisionnements. <br />
                • Réception et gestion des livraisons de marchandises. <br />
                • Garantir un service client de qualité. <br />
                • Organisation des tâches pour maximiser l'efficacité opérationnelle
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="D'octobre 2022 à août 2023"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={versailles}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
              💶 Caissière
              </h3>
              <h4 className="text-sm mt-1">
              Carrefour City Grenoble
              </h4>

              <h4 className="font-bold text-sm mt-3">
                <span className="font-normal">
                • Utilisation de la caisse enregistreuse pour les transactions en
espèces ,par chèque ou par carte bancaire et classement des
pièces et des justificatifs (bons de réduction, doubles des
factures, tickets de carte bleue ...), remise des éléments en fi n
de service.
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="De janvier 2022 à août 2022"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={tower}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="font-bold text-lg">
              👌 Employée polyvalente
              </h3>
              <h4 className="text-sm mt-1">
              Welcome Interime Paris
              </h4>

              <h4 className="font-bold text-sm mt-3">
                <span className="font-normal">
                • Accomplir les tâches spécifiques pour lesquelles j'ai été embauchée
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="D'octobre 2021 à décembre 2021"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                </div>
              }
            >
              <h3 className="font-bold text-lg">
              🏡 Aide à domicile
              </h3>
              <h4 className="text-sm mt-1">
              Cassiopée Grenoble
              </h4>
              <h4 className="font-bold text-sm mt-3">
                <span className="font-normal">
                • Assistance aux soins personnels, la gestion des rendez-vous et
                la surveillance de l'état de santé.
                </span>
              </h4>
            </VerticalTimelineElement>

            {/* element */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#9599f0",
                color: "rgb(226 232 240)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #9599f0",
              }}
              date="De juillet 2019 à août 2021"
              iconStyle={{ background: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                </div>
              }
            >
               <h3 className="font-bold text-lg">
               🥇 Responsable commerciale
              </h3>
              <h4 className="text-sm mt-1">
              Big Tenders Algerie
              </h4>
              <h4 className="font-bold text-sm mt-3">
                <span className="font-normal">
                • Présentation de l'
entreprise lors d'éventement professionnel (
salons, ateliers....) 
                </span>
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
