import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
