import { createSelector } from '@reduxjs/toolkit';
import {
  LOCALIZATION_REDUCER_KEY,
  STORE_KEYS,
  initialState,
} from './constants';
import { LocalizationState } from './types';

type Store = Record<string, any> & {
  [LOCALIZATION_REDUCER_KEY]: LocalizationState;
};

const localizationStoreSelector = (store: Store): LocalizationState =>
  store[LOCALIZATION_REDUCER_KEY] || initialState;

export const localizationActiveLocaleSelector = createSelector(
  localizationStoreSelector,
  (store: LocalizationState): string => store[STORE_KEYS.ACTIVE_LOCALE],
);

export const localizationDictionarySelector = createSelector(
  localizationStoreSelector,
  (store: LocalizationState): Record<string, Record<string, string>> =>
    store[STORE_KEYS.DICTIONARY],
);

export const localizationLoadingCountSelector = createSelector(
  localizationStoreSelector,
  (store: LocalizationState): number => store[STORE_KEYS.LOADING_COUNT],
);

const isLoadingSelector = createSelector(
  localizationStoreSelector,
  (store: LocalizationState): boolean => store[STORE_KEYS.IS_LOADING],
);

export const localizationIsLoadingSelector = createSelector(
  isLoadingSelector,
  localizationLoadingCountSelector,
  (isLoading: boolean, counter: number): boolean => isLoading || counter !== 0,
);

export const localizationLabelsSelector = createSelector(
  localizationStoreSelector,
  (store: LocalizationState): Record<string, string> =>
    store[STORE_KEYS.LABELS],
);

export const localizationLocalesSelector = createSelector(
  localizationStoreSelector,
  (store: LocalizationState): Array<string> => store[STORE_KEYS.LOCALES],
);
