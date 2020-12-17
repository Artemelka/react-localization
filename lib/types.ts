export type LocalizationState = {
  activeLocale: string;
  dictionary: Record<string, Record<string, string>>;
  isLoading: boolean;
  labels: Record<string, string>;
  loadingCount: number;
  locales: Array<string>;
};

export type StoreKeysType = {
  ACTIVE_LOCALE: 'activeLocale';
  DICTIONARY: 'dictionary';
  IS_LOADING: 'isLoading';
  LABELS: 'labels';
  LOADING_COUNT: 'loadingCount';
  LOCALES: 'locales';
};

export type locSlice = {
  changeLocalizationActiveLocale: (
    state: LocalizationState,
    action: { payload: string },
  ) => void;
  addLocalizationDictionary: (
    state: LocalizationState,
    action: { payload: Record<string, Record<string, string>> },
  ) => void;
  startLocalizationLoading: (
    state: LocalizationState,
    action: { payload: boolean },
  ) => void;
  stopLocalizationLoading: (
    state: LocalizationState,
    action: { payload: boolean },
  ) => void;
  addLocalizationLocales: (
    state: LocalizationState,
    action: { payload: Array<string> },
  ) => void;
  addLocalizationLabels: (
    state: LocalizationState,
    action: { payload: Record<string, string> },
  ) => void;
  initLocalizationState: (
    state: LocalizationState,
    action: { payload: LocalizationState },
  ) => void;
};
