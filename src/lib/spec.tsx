import axios from 'axios';

const jsonURL =
  'https://raw.githubusercontent.com/jcstein/testing/main/output.json';

const fetchJsonData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // console.error('Error fetching JSON data:', error);
  }
};

export const spec = fetchJsonData(jsonURL);
