import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
        </main>
      </Container>
      {/* <Footer  /> */}
    </div>
  );
};

export default MainLayout;
