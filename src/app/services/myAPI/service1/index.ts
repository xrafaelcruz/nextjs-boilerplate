import { useQuery } from '@tanstack/react-query';
import * as t from './types';

export const getData1 = async (): Promise<t.TService1> => {
  return { test: true };
};

export const useGetData1 = () => {
  const { data } = useQuery<t.TService1>({
    queryKey: ['data1'],
    queryFn: getData1,
  });

  return { data };
};
