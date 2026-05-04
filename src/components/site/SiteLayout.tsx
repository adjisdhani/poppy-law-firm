import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PoppyButton from "./PoppyButton";

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <PoppyButton />
    </div>
  );
};

export default SiteLayout;
