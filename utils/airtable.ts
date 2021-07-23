
// @ts-ignore
import { AIRTABLE_KEY } from '@env';

const baseUrl = 'https://api.airtable.com/v0/appNBdtRINjSfT9Yw/';

// const url = baseUrl + location;

/**
 * @description An async function that when called will fetch all records from airtable
 *
 */

export const airtable = async () => {
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

