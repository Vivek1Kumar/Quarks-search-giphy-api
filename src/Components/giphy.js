import React, { Component } from 'react';

// =============== API Key word ====================
const url = 'http://api.giphy.com/v1/gifs/search'
const apiKey = 'api_key=6PTMDXDar20dqIaIoPbRHEIhnS7ty9xh&q'

class Giphy extends Component {
    state = {
        searchKeyWord: '',
        data: null
    }

    // ======================= Search fun =======================
    search = (event) => {
        this.setState({
            searchKeyWord: event.target.value,
        },
            () => {
                fetch(`${url}?&${apiKey}=${this.state.searchKeyWord}&limit=5`)
                    .then(rec => rec.json())
                    .then(result => {
                        this.setState({
                            data: result,
                            loading: false
                        })
                    })
            }
        );
    }
    render() {
        return (
            <div>
                <h1>Search Your Favourit Giphy Images</h1>
                <input
                    placeholder="Put your Image Keyword"
                    type="text"
                    value={this.state.searchKeyWord}
                    onChange={this.search}
                />
                <ul>
                    {(this.state.data === null) ? '' : this.state.data.data.map(arr => {
                        return (
                            <div className="row">
                                {this.state.loading === true ? <h1>Loading...</h1> :
                                    <img
                                        src={arr.images.downsized.url}
                                        style={{ width: "150px", height: "150px" }}
                                    />
                                }
                            </div>
                        );
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default Giphy;