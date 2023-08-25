import BookingDetail from "../features/bookings/BookingDetail";

function Booking() {
  return <BookingDetail />;
}

// Now, remember the rule that we set for ourselves in the beginning, which is that a page should not fetch data and also not have any other side effects. Now, this is not a hard rule in React or in front end development, but it's a rule that I've seen many people use, and I also use it myself because this makes the pages folder a lot cleaner and then leaves much of the development work in the features folder. So again, then we can just implement a page here, close the folder, and completely forget about it because all the things that are related to bookings will live here in this bookings folder.

export default Booking;
