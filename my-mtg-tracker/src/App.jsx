import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import DeckDetailPage from "./Pages/DeckDetailPage";
import DecksPage from "./Pages/DecksPage";
import AboutPage from "./Pages/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/decks" element={<DecksPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/deckdetail/:id" element={<DeckDetailPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
