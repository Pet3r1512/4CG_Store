import useSWR from "swr";

const fetcher = (key) =>
  fetch(key)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });

export default function useFetch(key) {
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    isLoading: !data && !error,
    error,
  };
}
