import axios, { AxiosRequestConfig } from 'axios';

// @ts-ignore
import { AIRTABLE_KEY } from '@env';

// Axios is a utility library that simplifies api calls.
// https://axios-http.com/docs/instance
const instance = axios.create({
  baseURL: 'https://api.airtable.com/v0/appNBdtRINjSfT9Yw/',
  headers: {
    Authorization: `Bearer ${AIRTABLE_KEY}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

/**
 * @description An async function that when called will fetch all records from airtable via our Axios instance.
 */
export const airtable = async (opts: AxiosRequestConfig): Promise<any> => {
  try {
    const { data } = await instance.request(opts);
    return data;
  } catch (err) {
    console.error(err);
  }
};

