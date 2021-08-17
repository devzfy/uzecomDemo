import './assets/styles/main.scss'
import {
  Switch,
  Route
} from "react-router-dom";
import {
  Home,
  Header,
  Footer,
  Formen,
  SingleWear,
}from './pages'

function App() {


  return (
    <div className="App">
     


      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/formens" component={Formen}/>
        <Route exact path="/singleproduct/:id" component={SingleWear}/>
      </Switch>
      <Footer/>  
    </div>
  );
}

export default App;
