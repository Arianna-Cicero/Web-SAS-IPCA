import React from "react";
import "../styles/components/CategoryCard.css";

export interface CategoryCardProps {
  icon: string;
  title: string;
  color?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, color }) => {
  return (
    <div
      className="category-card"
      style={{ backgroundColor: color ? color : "#ffffff" }}
    >
      <img src={icon} alt={title} className="category-icon" />
      <p className="category-title">{title}</p>
    </div>
  );
};

export default CategoryCard;
