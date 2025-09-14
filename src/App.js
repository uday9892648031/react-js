import './App.css';
import ClickEvent from './components/ClickEvent';
import HelloWorld from './components/HelloWorld';
import JSXMarkup from './components/JSXMarkup';
import MultipleIfElse from './components/MultipleIfElse';
import NamedExport from './components/NamedExport';
import PropsExample from './components/PropsExample';
import State from './components/State';
import Toggler from './components/Toggler';

function App() {
  return (
    <div className="App">
      <PropsExample name="Alice" />
      <PropsExample name="Bob" />
      <PropsExample name="Charlie" />
    </div>
  );
}

export default App;
