import { Route, Routes } from "react-router";
import { Audio, Loading, Main } from "./index";

function App() {
  return (
    <>
      <Audio />
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
