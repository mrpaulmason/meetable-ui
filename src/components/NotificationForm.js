import React from 'react';
import ReactModal from 'react-modal';

class NotificationForm extends React.Component {

  state = {
    showModal: false
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <span>
          <a onClick={this.handleOpenModal}>Coming Soon - Get Notified</a>
        </span>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Inline Styles Modal Example"
           style={{
              overlay: {
                backgroundColor: 'rgba(0,0,0,0.7)',
                width: '50%',
                height: '50%',
                margin: 'auto'
              },
              content: {
                color: 'lightsteelblue'
              }
            }}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default NotificationForm
