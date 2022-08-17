import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HandleInput from './HandleInput';
import MultipleFields from './MultipleFields';
import Test from './Test';
import StateDemo from './StateDemo';
import InputsCheck from './InputCheck';
import PropsDemo from './PropsDemo';
import LifeCycleMethod from './LifeCycleMethod';
import UseEffectDemo from './UseEffectDemo';
import CallBackEvent from './CallBackEvent';
import ApiCall from './ApiCall';
import CheckList from './CheckList';
import Demo from './Demo';
import UseMemoDemo from './UseMemoDemo';
import NavBar from './tasktwo/NavBar';
import Search from './tasktwo/Search';
import Table from './tasktwo/Table';
import Froms from './tasktwo/Froms';
import Contact from './reactrouter/Contact';
import Pra from './tasktwo/Pra';
import Modal from './tasktwo/Modal';
import UseReducerDemo from './UseReduserDemo';
import UseContextDemo from './UseContextDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>


 <NavBar/>
<Search/>
<Modal/> 
<Table/>
{/* <Froms/> */}
  </div>
);


reportWebVitals();
