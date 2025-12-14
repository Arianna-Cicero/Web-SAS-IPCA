import React from "react";
import "../styles/pages/Donations.css";
import CategoryCard from "../components/CategoryCard";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Dropdown";
import { useForm } from "react-hook-form";

// Icons
import foodIcon from "../assets/svg/food.svg";
import hygieneIcon from "../assets/svg/hygiene.svg";
import cleaningIcon from "../assets/svg/cleaning.svg";

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const Donations: React.FC = () => {
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
    <div className="page-container">
      <section className="hero">
        <div className="hero-inner">
          <h1>DOAÇÕES</h1>
          <p>Ajude a nossa comunidade</p>
        </div>
      </section>

      <section className="cards-grid">
        <CategoryCard icon={foodIcon} title="Bens Alimentares" />
        <CategoryCard icon={hygieneIcon} title="Produtos de Higiene Pessoal" />
        <CategoryCard
          icon={cleaningIcon}
          title="Produtos de Higiene Habitacional"
        />
      </section>

      <div className="container">
        <section className="form-wrapper">
          <h2 className="form-title">Perguntas e Sugestões</h2>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              value=""
              placeholder="Digite o seu nome"
              {...register("name", { required: "Nome é obrigatório" })}
              error={errors.name?.message}
            />

            <Input
              label="Email"
              type="email"
              value=""
              placeholder="Digite o seu email"
              {...register("email", { required: "Email é obrigatório" })}
              error={errors.email?.message}
            />

            <Select
              label="Categoria"
              options={[
                { label: "Alimentação", value: "food" },
                { label: "Roupa", value: "clothes" },
              ]}
              {...register("category", {
                required: "Categoria é obrigatória",
              })}
              error={errors.category?.message}
            />

            <Input
              label="Mensagem"
              value=""
              as="textarea"
              placeholder="Digite a sua mensagem"
              {...register("message")}
              style={{ height: "120px" }}
            />

            <Button
              type="submit"
              loading={isSubmitting}
              disabled={!isValid}
              size="md"
            >
              Enviar
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Donations;
