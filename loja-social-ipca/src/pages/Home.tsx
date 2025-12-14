import React, { useEffect, useState } from "react";
import "../styles/pages/Home.css";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { getCategoryStats, CategoryStat } from "../services/StatisticsService";
//Photos
import foodIcon from "../assets/svg/food.svg";
import hygieneIcon from "../assets/svg/hygiene.svg";
import cleaningIcon from "../assets/svg/cleaning.svg";
import donateImg from "../assets/jpg/donate.jpg";
import clothesImg from "../assets/png/clothes.png";
import CategoryCard from "../components/CategoryCard";
import CampaignCard from "../components/CampaignCard";

Chart.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: [
    "Bens Alimentares",
    "Produtos de Higiene Pessoal",
    "Produtos de Higiene Habitacional",
  ],
  datasets: [
    {
      data: [47, 30, 23],
      backgroundColor: ["#007a47", "#44b97a", "#b7d8c4"],
      borderWidth: 0,
    },
  ],
};

// responsive options for the Pie chart
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: { usePointStyle: true, padding: 12 },
    },
    tooltip: { mode: "index" as const, intersect: false },
  },
};

const Home: React.FC = () => {
  // const [stats, setStats] = useState<CategoryStat[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const data = await getCategoryStats();
  //       setStats(data);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Erro ao carregar estatísticas.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchStats();
  // }, []);

  // if (loading) {
  //   return <p style={{ textAlign: "center" }}>Carregando dados...</p>;
  // }

  // if (error) {
  //   return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  // }

  // const labels = stats.map((item) => item.categoria);
  // const values = stats.map((item) => item.percent);
  // const colors = ["#007a47", "#44b97a", "#b7d8c4"];

  // const chartData = {
  //   labels,
  //   datasets: [
  //     {
  //       data: values,
  //       backgroundColor: colors,
  //       borderWidth: 0,
  //     },
  //   ],
  // };

  return (
    <div className="page-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>LOJA SOCIAL IPCA</h1>
          <p>Partilha e Solidariedade na Comunidade Académica</p>
        </div>
      </section>

      {/* CARDS */}
      <section className="cards-grid">
        <CategoryCard icon={foodIcon} title="Bens Alimentares" />
        <CategoryCard icon={hygieneIcon} title="Produtos de Higiene Pessoal" />
        <CategoryCard
          icon={cleaningIcon}
          title="Produtos de Higiene Habitacional"
        />
      </section>

      {/* CONTAINER */}
      <div className="container">
        {/* content */}
        {/* GRAPH */}
      <section className="home-stats">
        <h2>Quantidade de Bens por Categoria</h2>
        <div className="chart-section">
          <div className="chart-container">
            <Pie data={chartData} />
          </div>
          <div className="chart-legend">
            <ul>
              <li>Bens Alimentares — 47%</li>
              <li>Produtos de Higiene Pessoal — 30%</li>
              <li>Produtos de Higiene Habitacional — 23%</li>
            </ul>
          </div>
        </div>
      </section>
      {/* CAMPAIGNS */}
      <section className="home-campaigns">
        <h2>Últimas Campanhas</h2>
        <div className="campaigns-grid">
          <CampaignCard
            image={donateImg}
            title="Campanha de Recolha de Alimentos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <CampaignCard
            image={clothesImg}
            title="Recolha de Roupa Solidária"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
