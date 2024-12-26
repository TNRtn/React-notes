import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'; 
import Hello from './components/hello';
import Message from './components/message';
import Count from './components/count';
import Countx from './components/count2';
import EventBind from './components/eventbind';
import ParentComponet from './components/parentcomponent';
import UserGreet from './components/usergreeting';
import NameList from './components/namelist';
import List from './components/diclist';
import SingleElement from './components/singleelement';
import MultiElement from './components/multielement';
import Textarea from './components/textarea';
import Select from './components/select';
import Form from './components/form';
import LifeCycleMount from './components/lifecycle/lifecyclea';
import LifeCycleDemo from './components/lifecycle/lifecycle';
import FragmentA from './components/fragments/fragments1';
import FragmentB from './components/fragments/fragment2';
import Parent from './components/purecomponent/parentcomponent';
import Refs from './components/refs/refs';
import RefsDemo from './components/refs/refsdemo';
import RefsClass from './components/refs/refsclass';
import FRInputParent from './components/refs/forwardparent';
import PortalDemo from './portal/portal';
import ComponentA from './components/context/componenta';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Greet name="tnr"/>
        <Greet name="vijay"/>
        <Hello name="tnr" >
        <p>srm</p>
        </Hello>
        <Hello name="vijay">
        <button>action</button></Hello>
        <Message />
        <Count />
        <Countx />
        <Hello name="tnr" collage="srm"/>
        <Greet name="tnr" />
        <EventBind />
        <ParentComponet />
        <UserGreet />
        <NameList />
        <List />
        <NameList />
        <SingleElement />
        <MultiElement />
        <Textarea />
        <Select />
        <Form />
        <LifeCycleMount />
        <FragmentA />
        <FragmentB />
        <Parent />
        <Refs />
        <RefsDemo />
        <RefsClass />
        <FRInputParent />
        <PortalDemo />*/}
        <ComponentA />
      </div>
    );
  }
}

export default App;
