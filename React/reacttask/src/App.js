import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";
import Mycss from "./css/Mycss";
import Jsx from "./JSX/Jsx";
import Layout from "./layout/Layout";
import Mycom from "./Mycom";
import Module_css from "./Module_css/Module_css";
import Main_Sass from "./Sass/Main_Sass";
import Props_func from "./Props/Func_component/Props_func";
import Props_class from "./Props/Class_component/Props_class";
import State_func from "./State/Func_state/State_func";
import State_class from "./State/Class_state/State_class";
import Life_class from "./LifeCycle/Life_class/Life_class";
import Life_func from "./LifeCycle/Life_func/Life_func";
import Aapp from "./Routing/Aapp";


function App() {
  return (
    <div>
      {
        //<Mycom/>
        //<Func_component/>
        //<Class_component/>

        //<Layout/>
        //<Jsx/>
        //<Mycss/>

        //<Module_css/>
        //<Main_Sass/>

        // props
        //<Props_func/>
        //<Props_class/>


        // state
        //<State_func/>
        //<State_class/>

        // lifecycle
        //<Life_class/>
        //<Life_func/>

        //Routing
        <Aapp/>
      }

      
    </div>
  );
}

export default App;
