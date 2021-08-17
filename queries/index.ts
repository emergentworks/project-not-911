import { airtable } from '../utils/airtable';

/**
 * @description Helper that queries city names from Airtable 'meta' table that is used in city select screen & phone number list screen
 * @returns function
 */
export const getRecordsFromLocation = async (location: string) => {
  const { records } = await airtable({
    method: 'get',
    url: location,
  });
  return records;
};
