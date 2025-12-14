import React from "react";
import { useForm } from "react-hook-form";
// Components
import CampaignCard from "../components/CampaignCard";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Dropdown";
// Images
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
    console.log("Form submitted:", data);
  }

  return (
    <div className="page-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>CAMPANHAS</h1>
          <p>Apoie as iniciativas de solidariedade da Loja Social IPCA</p>
        </div>
      </section>

      {/* CAMPAIGN CARDS */}
      <section className="cards-grid">
        <CampaignCard image={donateImg} title="Recolha de alimentos" description="10 de abril a 25 de abril" />
        <CampaignCard image={donateImg} title="Solidariedade em ação" />
        <CampaignCard image={clothesImg} title="Campanha de vestuário" />
        <CampaignCard image={donateImg} title="Doe calçado" />
      </section>

      {/* CONTAINER CENTRAL */}
      <div className="container">
        {/* FORM SECTION */}
        <section className="form-wrapper">
          <h2 className="form-title">Perguntas e Sugestões</h2>

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              placeholder="Digite o seu nome"
              {...register("name", { required: "Nome é obrigatório" })}
              error={errors.name?.message}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Digite o seu email"
              {...register("email", { required: "Email é obrigatório" })}
              error={errors.email?.message}
            />

            <Select
              label="Categoria"
              options={[
                { label: "Informação", value: "info" },
                { label: "Sugestão", value: "suggestion" },
                { label: "Outro", value: "other" },
              ]}
              {...register("category")}
              error={errors.category?.message}
            />

            <Input
              label="Mensagem"
              as="textarea"
              placeholder="Digite a sua mensagem"
              {...register("message", { required: "Mensagem é obrigatória" })}
              error={errors.message?.message}
              style={{ height: "120px" }}
            />

            <Button type="submit" loading={isSubmitting} disabled={!isValid} size="md">
              Enviar
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Campaigns;
