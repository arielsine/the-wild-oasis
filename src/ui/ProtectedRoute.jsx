import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { styled } from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 3. if there is NO authenticated user, redirect to /login
  // So here we will need the navigate function\from useNavigate like this but we are only allowed to call this function here inside some other function like in a callback or in a use effect. So not at the top level of the component.
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2. while loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there IS a user, render app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
