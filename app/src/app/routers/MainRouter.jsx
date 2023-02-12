import { Route, Routes } from "react-router-dom";
import PostDetail from "../components/post/PostDetail";
import ShopDetail from "../components/shop/ShopDetail";
import HomePage from "../pages/home/HomePage";
import ShopsPage from "../pages/shops/ShopsPage";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetail />} />

        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
      </Routes>
    </>
  );
};

export default MainRouter;
