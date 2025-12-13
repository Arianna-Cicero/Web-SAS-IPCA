import React from "react";
import "../styles/pages/Campaign.css";
import { useForm } from "react-hook-form";
//components
import CampaignCard from "../components/CampaignCard";
import Button from "../components/Button";
import Input from "../components/Input";
//Photos
import donateImg from "../assets/jpg/donate.jpg";
import clothesImg from "../assets/png/clothes.png";



interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const Campaigns: React.FC = () => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  async function onSubmit(data: FormData) {
    await new Promise((r) => setTimeout(r, 1500));
  }

  return (
    <div className="home">
      <section className="home-hero">
      <h1 >Campanhas</h1>
      <p >Apoie as iniciativas de soliedaridade da Loja Social IPCA</p>
      </section>

      {/* CATEGORIES */}
      <section className="home-categories">
        <CampaignCard image={donateImg} title="Recolha de alimentos" description="10 de abril a 25 de abril"/>
        <CampaignCard image={donateImg} title="Solidariedade em ação" />
        <CampaignCard
          image={clothesImg}
          title="Campanha de vestuário"
        />
        <CampaignCard
          image={donateImg}
          title="Doe calçado"
        />
      </section>

      {/* CATEGORIES */}
      <section className="form-section">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Perguntas</h1>
          <Input
            label="Nome"
            name="name"
            value=""
            onChange={() => {}}
            placeholder="Digite o seu nome"
            size="lg"
            />
          <Input
            label="Email"
            name="email"
            type="email"
            value=""
            onChange={() => {}}
            placeholder="Digite o seu email"
            size="lg"
            />
          <Input
            label="Mensagem"
            name="message"
            as="textarea"
            value=""
            onChange={() => {}}
            placeholder="Digite a sua mensagem"
            size="lg"
            style={{ height: "100px" }}
            />
          <Button type="submit" loading={isSubmitting} variant="outline" size="sm"  disabled={!isValid}>
            Enviar
          </Button>
        </form>

      </section>

    </div>
  );
};

export default Campaigns;
