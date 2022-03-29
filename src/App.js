import './App.css';
import CovidDataStatewise from './CovidDataStatewise';
//import CreateContextEx from './HooksExample/CreateContextEx';
//import Calculator from './Calculator';
//import Card from './Card';
//import Card1 from './Card1';
//import ClickInc from './ClickInc';
//import CurrDateTime from './CurrDateTime';
//import Greeting from './Greeting';
//import Sdata from './Sdata';
import FormControl from './FormControl';
//import FormcontrolSpredOp from './FormcontrolSpredOp';
import ToDoList from './ToDoList';
//import CardExample from './CardExample';
import GoogleKeepComponent from './GoogleKeep/GoogleKeepComponent';
//import { Accordion } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
//import Header from "./GoogleKeep/Header";
import Footer from './GoogleKeep/Footer';
import Navbar from './Navbar';
import TempApp from './TempApp';
import Todo from './Todo';
import Example from './Example';
// import UseRefExample from './UseRefExample';
import './index.css';

function App() {
  return (
    <>
      {/* <CreateContextEx />
      <GoogleKeepCompnent />
      <CardExample />
      
      <CurrDateTime />
      <Greeting />
      <Calculator />
      <ClickInc />
      <FormControl />
      <FormcontrolSpredOp />
       <CovidDataStatewise/>
        <ToDoList />
      <Card1 /> */}
      {/* <Header/> */}
      
      
      <Navbar/>
      <Switch>
        <Route exact path='/' render={() => <CovidDataStatewise />} />
        <Route exact path='/ToDoList' component={() => <ToDoList />} />
        <Route exact path='/GoogleKeepComponent' component={GoogleKeepComponent} />
        <Route exact path='/TempApp' component={TempApp} />
        <Route exact path='/FormControl' component={FormControl} />
        <Route exact path='/Example' component={Example} />
        <Route exact path='/Todo' component={Todo} />

      </Switch>
      
       {/* <UseRefExample/> */}
      <Footer /> 
      



    </>
  );
}
export default App;
