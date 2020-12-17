import { createSlice, Draft } from '@reduxjs/toolkit';
import {
  initialState,
  STORE_KEYS,
  LOCALIZATION_REDUCER_KEY,
} from './constants';
import { LocalizationState, locSlice } from './types';

const localizationSlice = createSlice<LocalizationState, locSlice>({
  name: LOCALIZATION_REDUCER_KEY,
  initialState,
  reducers: {
    changeLocalizationActiveLocale: (
      state,
      { payload }: { payload: string },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.ACTIVE_LOCALE] = payload;
    },
    addLocalizationDictionary: (
      state: Draft<LocalizationState>,
      { payload }: { payload: Record<string, Record<string, string>> },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.DICTIONARY] = payload;
    },
    startLocalizationLoading: (
      state: Draft<LocalizationState>,
      { payload }: { payload: boolean },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.IS_LOADING] = payload;
      // eslint-disable-next-line
      state[STORE_KEYS.LOADING_COUNT] += 1;
    },
    stopLocalizationLoading: (
      state: Draft<LocalizationState>,
      { payload }: { payload: boolean },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.IS_LOADING] = payload;
      // eslint-disable-next-line
      state[STORE_KEYS.LOADING_COUNT] -= 1;
    },
    addLocalizationLocales: (
      state: Draft<LocalizationState>,
      { payload }: { payload: Array<string> },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.LOCALES] = payload;
    },
    addLocalizationLabels: (
      state: Draft<LocalizationState>,
      { payload }: { payload: Record<string, string> },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.LABELS] = payload;
    },
    initLocalizationState: (
      state: Draft<LocalizationState>,
      { payload }: { payload: LocalizationState },
    ) => {
      // eslint-disable-next-line
      state[STORE_KEYS.ACTIVE_LOCALE] = payload[STORE_KEYS.ACTIVE_LOCALE];
      // eslint-disable-next-line
      state[STORE_KEYS.DICTIONARY] = payload[STORE_KEYS.DICTIONARY];
      // eslint-disable-next-line
      state[STORE_KEYS.IS_LOADING] = payload[STORE_KEYS.IS_LOADING];
      // eslint-disable-next-line
      state[STORE_KEYS.LABELS] = payload[STORE_KEYS.LABELS];
      // eslint-disable-next-line
      state[STORE_KEYS.LOADING_COUNT] = payload[STORE_KEYS.LOADING_COUNT];
      // eslint-disable-next-line
      state[STORE_KEYS.LOCALES] = payload[STORE_KEYS.LOCALES];
    },
  },
});

export const {
  changeLocalizationActiveLocale,
  addLocalizationDictionary,
  startLocalizationLoading,
  stopLocalizationLoading,
  addLocalizationLocales,
  addLocalizationLabels,
  initLocalizationState,
} = localizationSlice.actions;
export const localizationReducer = localizationSlice.reducer;
