import './App.css';
import UseId from './components/useId';
import Memo from './components/useMemo';
import Callback from './components/useCallback';
import Ref from './components/useRef';
import Transition from './components/useTransition';

function App() {
  return (
    <div className="App">
      <UseId />
      <Callback />
      <Memo />
      <Ref />
      <Transition />
    </div>
  );
}

export default App;
