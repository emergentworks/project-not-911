import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: `${process.env.API_SERVER}/api/v1`,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


// @ts-ignore
import { AIRTABLE_KEY } from '@env';

const baseUrl = 'https://api.airtable.com/v0/appNBdtRINjSfT9Yw/';

// const url = baseUrl + location;

/**
 * @description An async function that when called will fetch all records from airtable
 *
 */
/**
 * @description helper that wraps our fetch calls, returns normalized json, handles errs
 * @returns json if successful request, else error message
 */
export const airtable = async (opts: AxiosRequestConfig): Promise<any> => {
  // return await helps with promise based errors
  return await instance.request(opts)
  try {
    const resp = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`
      }
    });
    const { records } = await resp.json();
    return records;
  } catch (err) {
    console.error(err);
  }
}

