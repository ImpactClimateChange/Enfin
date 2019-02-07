import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

class CustomModal extends Component {
  render() {
    return (
      <div>
        <Button outline color="primary" onClick={() => this.refs.modal.open()}>
          {this.props.buttonName}
        </Button>
        <PureModal
          header={this.props.header}
          onClose={() => {
            console.log('handle closing');
            return true;
          }}
          ref="modal"
          width={this.props.width || '60%'}
        >
          {this.props.children}
        </PureModal>
      </div>
    );
  }
}

export default CustomModal;
