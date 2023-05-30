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
    </>
  );
}

export default App;
