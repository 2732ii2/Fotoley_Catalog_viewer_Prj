
import './App.css';

import Left_part from "./Left_part";
import Right_p from './Right_p';
import { Provider } from 'react-redux';
import Store from './Redux/Stores';
function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <div className="Main_con">
          <Left_part />
          <Right_p />
        </div>
      </div>
    </Provider>
  );
}

export default App;
