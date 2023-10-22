import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateBooking } from "../../services/apiBookings";

import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) => {
      updateBooking(bookingId, {
        status: "checked-out",
      });
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success(`Booking Successfully Checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error during Checkout processing"),
  });

  return { checkout, isCheckingOut };
}
