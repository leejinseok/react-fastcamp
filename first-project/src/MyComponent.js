import React, { Component } from 'react'

class MyComponent extends Component {
    state = {
        lastName: '',
        firstName: '',
        names: []
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleClick = (e) => {
        const { lastName, firstName, names } = this.state;
        this.setState({
            lastName: '',
            firstName: '',
            names: [
                ...names, `${lastName} ${firstName}`
            ]
        })
    }

    handleKeyPress = (e) => {
        if(e.key == 'Enter') {
            this.handleClick();
        }
    }
    render() {
        const { lastName, firstName, names } = this.state;
        const { handleChange, handleClick, handleKeyPress } = this;
        return(
            <div>
                <input 
                    type='text' 
                    onChange={handleChange}
                    name='lastName' 
                    value={lastName}/>
                <input 
                    type='text' 
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    name='firstName' 
                    value={firstName}/>
                <button type='button'
                    onClick={handleClick}>
                    등록
                </button>
                {
                    names.map((name, index) => {
                        return <h2 key={index}> {name} </h2> 
                    })
                }
            </div>
        )
    }
}

export default MyComponent
