import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });

export default function useFetch(...args) {
  const { data, error } = useSWR(...args, fetcher);

  return {
    data,
    isLoading: !data && !error,
    error,
  };
}
