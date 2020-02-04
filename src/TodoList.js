import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css"; 
 class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            items:[]
        };
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value!=="")
        {
            var newItem={
                text:this._inputElement.value,
                key:Date.now()
            } ;
        
        this.setState((prevState)=>{
            return {
                items:prevState.items.concat(newItem)
            };
             
        }); 
    }
    this._inputElement.value="";
    console.log(this.state.items);
    e.preventDefault();
    }

deleteItem(key)
{
    var filteritems=this.state.items.filter(function(item){
    return (item.key!==key);
    });
 this.setState({items:filteritems});
}

    render() {  
        return ( 
<div className="todoListMain">
<div className="header">
    <form onSubmit={this.addItem}>
        <input  id="input1" ref={(a)=> this._inputElement=a}
        placeholder="enter task">
        </input>
        <button id="button1" type="submit">Add</button>
    </form>

</div>
<TodoItems entries={this.state.items}
           delete={this.deleteItem}/>
</div>

         );
    }
}
 
export default TodoList;