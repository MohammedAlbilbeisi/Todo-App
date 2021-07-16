import React,{ Component } from 'react';
import Todoitems from './component/Todoitems/Todoitems';
import Additems from './component/Additems/Additems';
import './App.css';

class App extends Component{
  state ={
items :[
  {id:1,name:'ahmmed',age:22},
  {id:2,name:'omar',age:23},
  {id:3,name:'Abdo',age:24}
]
}

deleteItem = (id) =>{
  let items = this.state.items.filter(item =>{
    return item.id !== id
  })
  this.setState({items})
}

addItem =(item) =>{
  
  let items = this.state.items;
  items.push(item);
  this.setState({items})
}
  
render(){
  return (
    <div className="App  container">
 <h1 className="text-center">TodoList App</h1>

      <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
      <Additems addItem={this.addItem}/>

      
    </div>
  );
}}

export default App;
