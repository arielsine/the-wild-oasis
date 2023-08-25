import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue }; //, method: "gte" };
  // for multiple filters, could pass in array of objects and loop over,  adding new query to query variable

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // QUERY
  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page], // we add any value that we want the query to depend on, here, onto this array. So this Query que is not just this string right here, but it can be any other things. (similar to dependency array)
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  // we first need to QueryClient and then on there we call the Prefetch Query method. So to get that QueryClient, we need to use the use QueryClient hook.
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  // as an alternative to all this, so to Prefetching and having pagination in the first place would be to use infinite queries for infinite scroll with React Query.

  return { isLoading, error, bookings, count };
}
