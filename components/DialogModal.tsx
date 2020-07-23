import React, { Component } from "react";
import Dialog from "react-native-dialog";

export class DialogModal extends Component<any> {
  state = {
    dialogVisible: true,
  };

  showDialog = () =>
    this.setState({ dialogVisible: true });

  handleCancel = () =>
    this.setState({ dialogVisible: false });

  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };

  render() {
    return (
      <Dialog.Container
        visible={this.state.dialogVisible}
        onBackdropPress={this.handleCancel}>
        <Dialog.Title>
          If you are experiencing an emergency please call 911.
        </Dialog.Title>
        <Dialog.Button label="Close" onPress={this.handleCancel} />
      </Dialog.Container>
    );
  }
}
