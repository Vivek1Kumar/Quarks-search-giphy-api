import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

    state = {
        show: true,
        time: null,
    }

    handleToggle = () => {
        this.setState({
            show: !this.state.show
        });
    }

    setTime = () => {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setTime()
        }, 1000);
    }

    render() {

        let clock = null;
        if (this.state.show) {
            clock = (
                <h1>{this.state.time}</h1>
            );
        }
        return (
            <div>
                <button type="button" onClick={this.handleToggle}>{ (this.state.show) ? "Hide" : "Show"}</button>
                {clock}
                <Link to='/giphy-api-seach'> Search</Link>
            </div>
        );
    }
}
export default Home;