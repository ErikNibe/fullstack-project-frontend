import { ReactNode, createContext, useEffect, useState } from "react";
import { tRegisterRequest } from "../pages/Register/interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { tLoginRequest } from "../pages/Login/interfaces";
import { iClient } from "./types";

interface iClientProviderProps {
  children: ReactNode;
}

interface iClientContextValues {
  registerClient: (data: tRegisterRequest) => void;
  singIn: (data: tLoginRequest) => void;
  client: iClient | null;
  setClient: React.Dispatch<React.SetStateAction<iClient | null>>;
  loading: boolean;
}

export const ClientContext = createContext<iClientContextValues>(
  {} as iClientContextValues
);

export const ClientProvider = ({ children }: iClientProviderProps) => {
  const navigate = useNavigate();

  const [client, setClient] = useState<iClient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClient = async () => {
      const token = localStorage.getItem("client-contacts:token");

      if (!token) {
        setLoading(false);

        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get("clients");
        setClient(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadClient();
  }, []);

  const registerClient = async (data: tRegisterRequest) => {
    try {
      await api.post("clients", data);
      console.log("sucesso");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const singIn = async (data: tLoginRequest) => {
    try {
      const response = await api.post("login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("client-contacts:token", token);

      const clientResponse = await api.get("clients");
      setClient(clientResponse.data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{ registerClient, singIn, client, setClient, loading }}
    >
      {children}
    </ClientContext.Provider>
  );
};
