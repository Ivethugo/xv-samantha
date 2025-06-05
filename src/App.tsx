import { Route, Routes } from "react-router";
import { Audio, Loading, Main } from "./index";

function App() {
  return (
    <>
      <Audio />
      <Routes>
        <Route path="xv-samantha/" element={<Loading />} />
        <Route path="xv-samantha/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
