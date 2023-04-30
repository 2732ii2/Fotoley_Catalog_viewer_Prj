
import './App.css';

import Left_part from "./Left_part";
function App() {
  return (
    <div className="App">
      <div className="Main_con">
        <Left_part />
        <div className="Right_Side">
          <div id="r_up"></div>
          <div id="r_down"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
