import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShopProvider } from "./store/ShopContext.tsx";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <ShopProvider >
        <App />
      </ShopProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
