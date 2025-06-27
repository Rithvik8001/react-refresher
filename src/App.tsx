import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col min-h-screen">
        <div className="m-4 sm:m-6 lg:m-8 space-y-6 sm:space-y-8">
          <Navbar />
          <Header />
        </div>
      </div>
    </>
  );
};

export default App;
