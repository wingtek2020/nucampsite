import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selectAllPromotions = () => {
  return PROMOTIONS;
};

export const selectFeaturedPromotion = () => {
  return PROMOTIONS.find((promotion) => promotion.featured);
};

export const selectRandomPromotion = () => {
  return PROMOTIONS[Math.floor(Math.random() * PROMOTIONS.length)];
};
