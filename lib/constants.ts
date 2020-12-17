import { LocalizationState, StoreKeysType } from './types';

export const LOCALIZATION_REDUCER_KEY = 'localization';

export const NavigatorLanguage = {
  EN: 'en-EN',
  RU: 'ru-RU',
};

export const DEFAULT_DICTIONARY = {
  [NavigatorLanguage.EN]: {},
  [NavigatorLanguage.RU]: {},
};

export const STORE_KEYS: StoreKeysType = {
  ACTIVE_LOCALE: 'activeLocale',
  DICTIONARY: 'dictionary',
  IS_LOADING: 'isLoading',
  LABELS: 'labels',
  LOADING_COUNT: 'loadingCount',
  LOCALES: 'locales',
};

export const initialState: LocalizationState = {
  [STORE_KEYS.ACTIVE_LOCALE]: NavigatorLanguage.RU,
  [STORE_KEYS.DICTIONARY]: {},
  [STORE_KEYS.IS_LOADING]: false,
  [STORE_KEYS.LABELS]: DEFAULT_DICTIONARY[NavigatorLanguage.RU],
  [STORE_KEYS.LOADING_COUNT]: 0,
  [STORE_KEYS.LOCALES]: [NavigatorLanguage.RU, NavigatorLanguage.EN],
};

export const ErrorMessages = {
  REQUEST_ERROR: `services/${LOCALIZATION_REDUCER_KEY}: translation dictionary not loaded, used default dictionary.`,
  MIDDLEWARE_ERROR: `services/${LOCALIZATION_REDUCER_KEY}: You must integrate translateMiddleware with redux-store using`,
};
