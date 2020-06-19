import axios from 'axios';
import { AxiosResponse } from 'axios';

export const getItems = async (url: string) => {
  try {
    const items: AxiosResponse = await axios.get(url);
    return items;
  } catch (error) {
    console.error(error);
  }
}
