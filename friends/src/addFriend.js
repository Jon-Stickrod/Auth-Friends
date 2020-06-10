import React from 'react';
import axiosWithAuth from './utils/axiosWithAuth';

class AddFriend extends React.Component{
    constructor(){
        super();
        this.state = { friend: {name: '', age:'', email:''} }
    }

    submitHandler = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))  
    }

    changeHandler = (event) => {
        this.setState( {friend: {...this.state.friend, [event.target.name]: event.target.value}})
        console.log(this.state)
    }

    render(){
        return(
            <div className="AddFriend">
                <h2>Add Friend</h2>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} name="name" placeholder="Name"  />
                    <input onChange={this.changeHandler} name="age" placeholder="Age"  />
                    <input onChange={this.changeHandler} name="email" placeholder="Email"  />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}
export default AddFriend;