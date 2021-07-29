import { rapidapi } from '../api/rapidapi';

type Error = {
  error: string;
  message: string;
  statusCode: number;
};

export type DataWTWResponse = {
  Query: string;
  Watch: string;
  WatchUrl: string;
  Company: {
    Name: string;
    Description: string;
    LogoUrl: string;
    Twitter: string;
    Facebook: string;
  };
};

type PromiseReturn = DataWTWResponse[] & Error;

type GetDataReturn = {
  getWhereToWatch: (title: string) => Promise<PromiseReturn>;
};

export const useWhereToWatch = (): GetDataReturn => {
  const getWhereToWatch = async (title: string) => {
    try {
      const response = await rapidapi.post('/wheretowatch', {
        mediaType: 'movie',
        title,
      });
      return response.data;
    } catch (error) {
      return { error };
    }
  };

  return {
    getWhereToWatch,
  };
};
