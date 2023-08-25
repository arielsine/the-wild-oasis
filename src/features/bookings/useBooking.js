import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    // So, this is actually a bug that we need to fix right now. So, let's come here to our use booking. And then here we need to include the booking ID. And so this is very important, because otherwise, as we switch between these different booking pages, the data that each of them gets will be the same. So, each of them will still be coming then here from this cash with the same name for all of them. But now each page will have its unique name.
    queryFn: () => getBooking(bookingId),
    retry: false, // React Query will try to fetch data three times in case that it fails in the beginning. And so here in this case, basically not finding the data probably means that it doesn't exist in the first place. And so then there's no point in retrying.
  });

  return { isLoading, error, booking };
}
