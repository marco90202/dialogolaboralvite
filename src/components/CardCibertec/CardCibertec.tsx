import React from "react";
import iconInscription from "../../assets/cibertec/icons/iconInscription.svg";
import iconArrow from "../../assets/cibertec/icons/iconArrow.svg";
import {
  ContainerCard,
  Inscription,
  ContentArrow,
  TextInscription,
  Arrow,
} from "./stylesCard";

const CardCibertec = () => {
  return (
    <div
      style={{
        background: "#F8FAFD",
        width: "100%",
        paddingTop: "96px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 200px)",
        gridGap: "40px",
      }}
    >
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
      <ContainerCard>
        <Inscription src={iconInscription} alt="iconInscription" />
        <ContentArrow>
          <TextInscription>Matrícula e intranet</TextInscription>
          <Arrow src={iconArrow} alt="iconArrow" />
        </ContentArrow>
      </ContainerCard>
    </div>
  );
};

export default CardCibertec;
