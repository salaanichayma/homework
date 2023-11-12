import axios from 'axios';

const API_BASE_URL = '/MS_EFA/XML_STOPFINDER_REQUEST';
const API_PARAMS = {
  coordOutputFormat: 'WGS84[dd.ddddd]',
  ms_suggestMacro: 'ms_suggest',
  outputFormat: 'rapidJSON',
  sfMacroMS: 1,
  snapDistance_sf: 500,
  type_sf: 'any',
};

const getLocations = async (name) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        ...API_PARAMS,
        name_sf: name,
      },
    });
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export default getLocations;
