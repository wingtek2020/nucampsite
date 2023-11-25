import {PARTNERS} from '../../app/shared/PARTNERS';

export const selectAllPartners = () =>
{
    return PARTNERS;
}

export const selectPartnerById = (id) => {
    return PARTNERS.find((partner) => partner.id === parseInt(id));
};

export const selectRandomPartner = () => {
    return PARTNERS[Math.floor(Math.random() * (PARTNERS.length))];
}

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
};