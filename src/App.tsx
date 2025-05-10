import Day from "./components/calenders/Day";
import Month from "./components/calenders/Month";
import Year from "./components/calenders/Year";
import Favorites from "./components/calenders/Favorites";
function App() {
  return (
    <div className="container  max-w-[1400px] mx-auto px-3">
      <Day />
      <Month />
      <Year />
      <Favorites/>
    </div>
  );
}
export default App;
