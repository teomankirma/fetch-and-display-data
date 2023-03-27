import React from "react";
import { Alert, Center } from "@mantine/core";
import Loading from "react-fullscreen-loading";

function StateHandler(props) {
  let { showLoader = false, showError = false, showSuccess = false } = props;

  if (showLoader) {
    return (
      <Loading
        loading={showLoader}
        background="#2ecc71"
        loaderColor="#3498db"
      />
    );
  }

  if (showError) {
    return (
      <Center>
        <Alert
          title="Oops!"
          color="red"
          withCloseButton
          variant="filled"
          onClose={props.closeButton}
        >
          Something went wrong! Please try again!
        </Alert>
      </Center>
    );
  }

  if (showSuccess) {
    return (
      <Center>
        <Alert
          title="Successful!"
          color="green"
          withCloseButton
          variant="filled"
          styles={{ width: "400px" }}
          onClose={props.closeButton}
        >
          Your API call was successful!
        </Alert>
      </Center>
    );
  }
}

export default StateHandler;
