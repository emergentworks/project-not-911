import { airtable } from '../utils/airtable';

export const getRecordsFromLocation = async (location: string) => {
  const { records } = await airtable({
    method: 'get',
    url: location,
  });
  return records;
};
