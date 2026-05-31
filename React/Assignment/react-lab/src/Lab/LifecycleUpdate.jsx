import React, { Component } from 'react'

export class LifecycleUpdate extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated");

        console.log(
            `Previous Count: ${prevState.count}`
        );

        console.log(
            `Current Count: ${this.state.count}`
        );
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div>
                <h2>Lifecycle Methods Example</h2>
                <h3>Count: {this.state.count}</h3>
                <button className='btn btn-info m-3' onClick={this.increaseCount}>Increment</button>
            </div>
        )
    }
}

export default LifecycleUpdate
