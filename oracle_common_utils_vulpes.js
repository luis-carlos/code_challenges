const lo = require('lodash');

const SOURCES = {
    NONE: {
      label: 'None',
      isAddressSrc: true,
    },
    BUILTWITH: {
      label: 'BuiltWith',
      isAddressSrc: false,
    },
    CALCULATED: {
      label: 'Calculated',
      isAddressSrc: false,
    },
    CRUNCHBASE: {
      label: 'Crunchbase',
      isAddressSrc: true,
    },
    DATAFOX_OVERRIDE: {
      label: 'DataFox Override',
      isAddressSrc: false,
    },
    EDGAR: {
      label: 'Edgar',
      isAddressSrc: true,
    },
    FLEXIBLE_DATA: {
      label: 'Flexible Data',
      isAddressSrc: true,
    },
    FORM_5500: {
      label: 'Form 5500',
      isAddressSrc: false,
    },
    HG_DATA: {
      label: 'HG Data',
      isAddressSrc: false,
    },
    NAICS_DOT_COM: {
      label: 'naicsDotCom',
      isAddressSrc: false,
    },
    INDEED: {
      label: 'Indeed',
      isAddressSrc: false,
    },
    INTRINIO: {
      label: 'Intrinio',
      isAddressSrc: false,
    },
    TICKER: {
      label: 'Ticker',
      isAddressSrc: false,
    },
    UK_COMPANIES_HOUSE: {
      label: 'UkCompaniesHouse',
      isAddressSrc: true,
    },
    URL: {
      label: 'URL',
      isAddressSrc: true,
    },
    WEBSITE: {
      label: 'Website',
      isAddressSrc: true,
    },
    ZOOMINFO: {
      label: 'ZoomInfo',
      isAddressSrc: true,
    },
    SIMILARWEB: {
      label: 'SimilarWeb',
      isAddressSrc: false,
    },
    SIGNAL_ACQUISITION: {
      label: 'SignalAcquisition',
      isAddressSrc: false,
    },
    OPENCORPORATES: {
      label: 'OpenCorporates',
      isAddressSrc: true,
    },
};
const result = lo.mapValues(SOURCES, 'label');




console.log(result);