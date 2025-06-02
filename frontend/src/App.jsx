import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import NoteDetailPage from "./Pages/NoteDetailPage";
const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
