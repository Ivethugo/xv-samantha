import { Route, Routes } from "react-router";
import { Audio } from "./index";
import React, { Suspense } from "react";
import Background from "./assets/images/loading/loading.jpg";

const LazyLoading = React.lazy(() =>
  import("./components/pages/Loading").then((module) => ({
    default: module.Loading,
  }))
);

const LazyMain = React.lazy(() =>
  import("./components/pages/Main").then((module) => ({
    default: module.Main,
  }))
);

const preloading = (
  <div
    className="w-screen h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${Background})` }}
  >
    <div className="w-full h-full opacity-[0.8] bg-white relative" />
  </div>
);

function App() {
  return (
    <>
      <Audio />
      <Suspense fallback={preloading}>
        <Routes>
          <Route path="/" element={<LazyLoading />} />
          <Route path="/main" element={<LazyMain />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
