import React from "react";
import "../styles/components/CampaignCard.css";

interface CampaignCardProps {
  image: string;
  title: string;
  description?: string;
  link?: string;
  color?: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  image,
  title,
  description,
  link = "#",
  color
}) => {
  return (
    <div className="campaign-card" style={{ color: color || "#007a47" }}>
      <img src={image} alt={title} className="campaign-image" />
      <div className="campaign-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="campaign-button">
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default CampaignCard;
