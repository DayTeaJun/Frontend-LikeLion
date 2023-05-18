import { useMouseLocation } from "./Hook/useMouseLocation";

function App() {

  const location = useMouseLocation();



  return (
    <div style={{ height: 100, width: 100, backgroundColor: location.y > 200 ? "royalblue" : "hotpink" }
    }> TestBox</div >
  );
}
export default App;
