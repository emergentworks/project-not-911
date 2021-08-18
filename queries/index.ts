import { airtable } from '../utils/airtable';

/**
 * @description helper that queries phone numbers from Airtable based on location
 */
export const getRecordsFromLocation = async (location: string) => {
  const { records } = await airtable({
    method: 'get',
    url: location,
  });
  return records;
};
