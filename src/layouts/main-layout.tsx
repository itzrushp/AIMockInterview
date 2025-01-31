import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer";
import { Container } from "lucide-react";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
};
