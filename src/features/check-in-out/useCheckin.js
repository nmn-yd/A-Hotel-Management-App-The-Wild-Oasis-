import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) => {
      updateBooking(bookingId, { status: "checked-in", isPaid: true });
    },
    onSuccess: (data) => {
      console.log(data);
      // toast.success(`Booking #${data.Id} Successfully Checked In`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was an error during Checkin processing"),
  });

  return { checkin, isCheckingIn };
}
