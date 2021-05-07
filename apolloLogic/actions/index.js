import { GET_COUNTIES } from '../queries';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_COUNTY, UPDATE_COUNTY, DELETE_COUNTY } from '../mutations';

export const useGetCounties = () => useQuery(GET_COUNTIES);

export const useUpdateCounty = () => useMutation(UPDATE_COUNTY);
export const useDeleteCounty = () =>
  useMutation(DELETE_COUNTY, {
    update(cache, { data: { deleteCounty } }) {
      const { counties } = cache.readQuery({ query: GET_COUNTIES });
      const newCounties = counties.filter(p => p._id !== deleteCounty);
      cache.writeQuery({
        query: GET_COUNTIES,
        data: { counties: newCounties },
      });
    },
  });

export const useCreateCounty = () =>
  useMutation(CREATE_COUNTY, {
    update(cache, { data: { createCounty } }) {
      const { counties } = cache.readQuery({ query: GET_COUNTIES });
      cache.writeQuery({
        query: GET_COUNTIES,
        data: { counties: [...counties, createCounty] },
      });
    },
  });
