import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           userInfo: {
                name: "Bwinamit",
                location: "Bangalore",
            },
        };}
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/bwinamit");
        const jsonData = await data.json();
        this.setState(
            {
                userInfo: jsonData,
            }
        )
        console.log(jsonData);
    }
    render() {
        // console.log("Child render")
        const { name, location,avatar_url } = this.state.userInfo
    
        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>{name}</h2>
                <h3>{location}</h3>   
            </div>
        );
    }
}

export default UserClass;
