import "./App.css";
import Usestate from "./Usestate";
import Advanceusestate from "./Advancedusestate";
import Signinform from "./Signinform";
import Todolist from "./Todolist";
import Usestateeffect from "./Usestateuseeffect";
import UseeffectsearchAPI from "./UseeffectsearchAPI";
import { UserContext } from "./Usecontext/Usecontexts";
//import Subchild from "./Usecontext/subChild";
import Usereducer from "./Usereducer/Usereducer";
function App() {
  return (
    <div className="App">
      {/*         <Usestate />
       */}
      {/*           <Advanceusestate />
       */}
      {/*             <Signinform />
       */}
      {/* <Todolist /> */}
      {/* <Usestateeffect /> */}
      {/* <UseeffectsearchAPI /> */}
      {/* <Subchild /> */}
      <Usereducer />
    </div>
  );
}

export default App;
