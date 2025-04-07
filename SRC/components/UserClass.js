import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0,
          }
        console.log("Child constructor")  
        };
    componentDidMount() {
        console.log("Child componentDidMount")
    }
    render() {
        console.log("Child render")
    const { name, location } = this.props;  
    const { count} = this.state; // Destructuring state variables  
        return (
            <div className="user-card">
                <h2>{name}</h2>
                <h3>Count:{count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:count+1
                    })
                }}>Increase</button>
                <h3>{location}</h3>
                <h3>@bwinamit19</h3>
            </div>
        );
    }
}

export default UserClass;
