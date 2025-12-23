import "./App.css";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import News from "./page/News"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navbar className="sticky top-0  left-0 z-20"/>
      <Category className="px-4 py-8 sticky top-15 z-10 bg-base-100"/>
      <News className="pb-8"/>
      {/* {loading? <Loader /> : <News className="pb-8"/>} */}
      <Footer />
    </>
  );
}

export default App;
