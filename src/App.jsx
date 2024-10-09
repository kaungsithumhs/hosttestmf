import { Suspense, lazy } from "react";

const Home = lazy(() => import("remoteApp/ChatRoom"));
function App() {
  return (
    <>
      <p>asdal;sdka;lsdk</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
