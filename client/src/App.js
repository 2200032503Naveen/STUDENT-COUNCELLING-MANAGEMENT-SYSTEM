import logo from './logo.svg';
import './App.css';
import Reg from './components/Register'
import Show from './components/Show'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Appbar from './components/Appbar'
import Login from './components/Login';
import Book from './components/Book';
import Error from './components/Error';
import Update from './components/Update';

function App({store}) {
  function Page(){
    switch(store.getState().NavReducer){
      case "Login":
        return (<div><Login store={store} /></div>)
      case "Registration":
        return (<div><Reg /></div>)
      case "Show":
        if( localStorage.getItem("role") == 1)
          return (<div><Show /></div>)
        else
          return (<div><Error /></div>)
      case "Book":
        if( localStorage.getItem("role") == 3 || localStorage.getItem("role") == 1)
          return (<div><Book /></div>)
        else
          return (<div><Error /></div>)
      case "Update":
        if(localStorage.getItem("role") == 2|| localStorage.getItem("role")== 1)
          return (<div><Update /></div>)
      else
        return(<div><Error /></div>)
    
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.kluniversity.in/ieee/img/klulogo.jpg" className="App-logo" alt="logo" />
        <p>𝚂𝚝𝚞𝚍𝚎𝚗𝚝 𝙲𝚘𝚞𝚗𝚌𝚎𝚕𝚕𝚒𝚗𝚐 𝙼𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚂𝚢𝚜𝚝𝚎𝚖</p>
      </header>
      <div className="App-body">
        <Appbar store={store}/>
       <Page /> 
      </div>
    </div>
  );
}

export default App;