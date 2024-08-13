import { Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
import RootLayout from "./_root/RootLayout";
import TopInvestors from "./components/TopInvestors/TopInvestors";

const App = () => {
  return (
    <main className="h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/stocks" element={<div>Stocks</div>} />
          <Route path="/top-investors" element={<TopInvestors />} />
          <Route path="/wishlist" element={<div>Wishlist</div>} />
          <Route path="/paper-trading" element={<div>Paper Trading</div>} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
