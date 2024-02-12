import { atom } from 'recoil';

// Initialize your nested array of strings as the initial state
const initialBreeds = [
];

// Define the Recoil atom with the name "breeds"
export const breedsState = atom({
    key: 'breedsState', // unique key for the atom
    default: initialBreeds // initial state of the atom
});
