import {Outlet} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Navbar />
      <Header />
      <main className="min-w-0 flex-1 px-5 pt-6 pb-28 md:px-12 md:pt-10 md:pb-16">
        <div className="mx-auto max-w-270">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
