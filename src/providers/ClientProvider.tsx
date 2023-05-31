import { ReactNode, createContext, useEffect, useState } from "react";
import { tRegisterRequest } from "../pages/Register/interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { tLoginRequest } from "../pages/Login/interfaces";
import { iClient } from "./types";
import { tUpdate } from "../components/ModalEdit/interfaces";
import { toast } from "react-toastify";

interface iClientProviderProps {
  children: ReactNode;
}

interface iClientContextValues {
  registerClient: (data: tRegisterRequest) => void;
  singIn: (data: tLoginRequest) => void;
  client: iClient | null;
  setClient: React.Dispatch<React.SetStateAction<iClient | null>>;
  loading: boolean;
  updateClient: (data: tUpdate) => void;
  requesting: boolean;
}

export const ClientContext = createContext<iClientContextValues>(
  {} as iClientContextValues
);

export const ClientProvider = ({ children }: iClientProviderProps) => {
  const navigate = useNavigate();

  const [client, setClient] = useState<iClient | null>(null);
  const [loading, setLoading] = useState(true);
  const [requesting, setRequesting] = useState(false);

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
      setRequesting(true);
      await api.post("clients", data);

      toast.success("Conta criada com sucesso!");

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setRequesting(false);
    }
  };

  const singIn = async (data: tLoginRequest) => {
    try {
      setRequesting(true);
      const response = await api.post("login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("client-contacts:token", token);

      const clientResponse = await api.get("clients");
      setClient(clientResponse.data);
      3;

      toast.success("Login realizado com sucesso");

      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      toast.error("Usuário ou senha incorreto");
    } finally {
      setRequesting(false);
    }
  };

  const updateClient = async (data: tUpdate) => {
    try {
      const response = await api.patch("clients", data);

      setClient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        registerClient,
        singIn,
        client,
        setClient,
        loading,
        updateClient,
        requesting,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
