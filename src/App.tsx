import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClientProvider } from "./providers/ClientProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <ClientProvider>
        <RoutesMain />
      </ClientProvider>

      <ToastContainer
        position="top-right"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
