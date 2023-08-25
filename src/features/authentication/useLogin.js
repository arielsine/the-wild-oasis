import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // So it's a mutation because actually something changes on the server. So basically a user gets authenticated and also it's gonna be a lot easier to then handle the success and error states if this is a mutation.
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      //   console.log(user); // gives {user, session}
      // this basically allows us to manually set some data into the React Query cache. And so then here in this useUser that will be called later and which uses the same query key, React Query will then simply get this data from the cache.
      queryClient.setQueryData(["user"], user.user); // not .setQueriesData
      navigate("/dashboard", { replace: true });
      // And so with {replace:true}, we then basically erase the place that we were earlier. So otherwise going back, using this back button here is not really gonna work.
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
