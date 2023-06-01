import { Navigate, Outlet } from "react-router-dom";
import { useClient } from "../../hooks/useClient";

export const ProtectedRoutes = () => {
  const { loading, client } = useClient();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return client ? <Outlet /> : <Navigate to={"/"} />;
};
