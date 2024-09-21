// components/CardSection.js
import React from "react";

const cards = [
  {
    title: "Budget & Resource",
    icon: "/icons/budget-resource-white.svg", // Placeholder for icon
  },
  {
    title: "Expenditure & Corporate Finance",
    icon: "/icons/expenditure-corporate-icon.svg",
  },
  {
    title: "Annual Budget",
    icon: "/icons/annual-budget.svg",
  },
];

const CardSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-primary rounded-lg shadow-lg text-white flex flex-col items-center justify-center p-6"
          >
            <img src={card.icon} alt={card.title} className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
