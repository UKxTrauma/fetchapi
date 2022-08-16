import React, { Component } from "react";
import Modal from './modal.js';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      current: {}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
}

showModal = (animeList) => {
    this.setState({ show: true, current: animeList });
};

hideModal = () => {
    this.setState({ show: false });
};

render() {
    if(this.props.errorMsg !== ''){
        return <h1>{this.props.errorMsg}</h1>
    }
    return (
        <div className="container">
            <h1>Fetch API</h1>
            {this.props.anime.map((animeList, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => this.showModal(animeList)}>{animeList.anime_name}</button>
                    </div>
                )
            })}
            {this.state.show && <Modal show={this.state.show} handleClose={this.hideModal} current={this.state.current}>
            </Modal>}
      </div>
    );
  }
}

export default Content