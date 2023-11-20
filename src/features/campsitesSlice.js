import {CAMPSITES} from '../shared/CAMPSITES';

export const selectAllCampsites = () =>
{
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    //get the random campsite
    return CAMPSITES[Math.floor(Math.random() * (CAMPSITES.length))];
}