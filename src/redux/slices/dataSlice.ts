import { createSlice } from "@reduxjs/toolkit";
import data from '../../utils/data.json';

interface ICountry {
  name: string,
  topLevelDomain: string[],
  alpha2Code: string,
  alpha3Code: string,
  callingCodes: string[],
  capital: string,
  altSpellings: string[],
  subregion: string,
  region: string,
  population: number,
  latlng: number[],
  demonym: string,
  area: number,
  timezones: string[],
  borders: string[],
  nativeName: string,
  numericCode: string,
  flags: {
    svg: string,
    png: string
  },
  currencies:
  {
    code: string,
    name: string,
    symbol: string
  }[]
  ,
  languages:
  {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
  }[],
  translations: {
    br: string,
    pt: string,
    nl: string,
    hr: string,
    fa: string,
    de: string,
    es: string,
    fr: string,
    ja: string,
    it: string,
    hu: string
  },
  flag: string,
  regionalBlocs:
  {
    acronym: string,
    name: string
  }[]
  ,
  cioc: string,
  independent: boolean
}

interface IInitialState {
  allCountries: any[],
  currentCountries: any[]
}

const initialState: IInitialState = {
  allCountries: data,
  currentCountries: []
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    filterCountries: (state, action) => {
      if (action.payload === 'all') {
        state.currentCountries = state.allCountries.slice(0, 8);
      } else if (action.payload === 'Africa' || action.payload === 'Asia' || action.payload === 'Europe' || action.payload === 'Oceania') {
        state.currentCountries = [];

        for (let i = 0; i < state.allCountries.length; i++) {
          if (state.currentCountries.length === 8) {
            break;
          }

          if (state.allCountries[i].region === action.payload) {
            state.currentCountries.push(state.allCountries[i]);
          }
        }
      } else if (action.payload === 'America') {
        state.currentCountries = [];

        for (let i = 0; i < state.allCountries.length; i++) {
          if (state.currentCountries.length === 8) {
            break;
          }

          if (state.allCountries[i].region === 'Americas') {
            state.currentCountries.push(state.allCountries[i]);
          }
        }
      }
    },
    searchCountry: (state, action) => {
      state.currentCountries = [];

      for (let i = 0; i < state.allCountries.length; i++) {
        if (action.payload === '') {
          state.currentCountries = state.allCountries.slice(0, 8);
        }

        if (state.allCountries[i].name.toLowerCase().includes(action.payload.toLowerCase())) {
          state.currentCountries.push(state.allCountries[i]);

        }
      }
    }
  }
});

export const { filterCountries, searchCountry } = dataSlice.actions;
export default dataSlice.reducer;
