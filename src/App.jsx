import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./task/TaskBoard";

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}
