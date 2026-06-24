import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f111a 0%, #1a1f35 50%, #0f111a 100%)",
      }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}
