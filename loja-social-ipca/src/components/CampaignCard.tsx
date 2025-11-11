import React from "react";
import "../styles/CampaignCard.css";

interface CampaignCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  image,
  title,
  description,
  link = "#",
}) => {
  return (
    <div className="campaign-card">
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
