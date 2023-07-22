import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import "./index.css";

import { LandingPage } from "./LandingPage";
import { SearchPage } from "./Search/SearchPage";

import { ModalDetail } from "./ModalDetail";
import { ModalObjectProvider } from "./ModalObjectProvider";

function App() {
  return (
    <ModalObjectProvider>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/search/:categorySelected/:searchTerm"
          element={<SearchPage />}
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <ModalDetail />
    </ModalObjectProvider>
  );
}

export default App;
