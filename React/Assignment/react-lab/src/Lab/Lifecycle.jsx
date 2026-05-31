import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: true,
        };
    }

    componentDidMount() {

        fetch("http://localhost:4000/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({
                    users: data,
                    loading: false,
                })
                
            })
            .catch((error) => {
                console.log("Error:", error);
            });

    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                {
                    this.state.loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                            {this.state.users.map((user) => (
                                <li key={user.id}>
                                    {user.firstName}
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        )
    }
}

export default Lifecycle