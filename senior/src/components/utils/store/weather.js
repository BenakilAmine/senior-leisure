import { useQuery } from "@apollo/client";
import {GET_WEATHER_CITY} from '../querie/weather';

export const GetAllCity = (city) => {
  const { data, loading, error } = useQuery(GET_WEATHER_CITY, {
    variables: city
  });
  const availableData = data;
  console.log(availableData);
    if (!availableData) {
      return {
        loading,
        hasData: availableData,
      };
    }
    return {
      loading,
      error,
      availableData,
    };
  };
