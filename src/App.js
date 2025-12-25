import './App.css';
import ClickEvent from './components/BasicClickEvent';
import Parent from './components/ClickEventFromChildToParent/Parent';
import ClickEventWithEventObject from './components/ClickEventWithEventObject';
import Clickeventwithfunctionparams from './components/Clickeventwithfunctionparams';
import ClickEventWithStateUpdate from './components/ClickEventWithStateUpdate';
import HelloWorld from './components/HelloWorld';
import JSXasaProp from './components/JSXasaProp';
import JSXMarkup from './components/JSXMarkup';
import MultipleIfElse from './components/MultipleIfElse';
import NamedExport from './components/NamedExport';
import PassCmpAsJsxProp from './components/PassCmpAsJsxProp';
import PassJSXInline from './components/PassJSXInline';
import PassJSXusingChildren from './components/PassJSXusingChildren';
import PropsExample from './components/PropsExample';
import State from './components/State';
import Toggler from './components/Toggler';

function App() {
  return (
    <div className="App">
    <PassCmpAsJsxProp />
    </div>
  );
}

export default App;
