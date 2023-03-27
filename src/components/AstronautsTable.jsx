import {
  Table,
  Group,
  Text,
  Anchor,
  ScrollArea,
  Button,
  Center,
  Space,
  Alert,
} from "@mantine/core";
import Loading from "react-fullscreen-loading";
import React, { useState } from "react";

function AstronautsTable() {
  const [astronauts, setAstronauts] = useState([]);
  const [loading, setLoading] = useState();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleClick = async function () {
    setLoading(true);
    try {
      const result = await fetch("http://api.open-notify.org/astros.json");
      const data = await result.json();

      setAstronauts(data.people);
      setLoading(false);
      setSuccessAlert(true);
    } catch (err) {
      setLoading(false);
      setErrorAlert(true);
    }
  };

  const rows = astronauts.map((item, index) => (
    <tr key={index}>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item.craft}
        </Anchor>
      </td>
    </tr>
  ));

  return (
    <>
      <Space h="lg" />
      <Center className="api-call">
        <Button color="dark" radius="xl" size="md" onClick={handleClick}>
          API Call
        </Button>
      </Center>
      <Loading loading={loading} background="#2ecc71" loaderColor="#3498db" />
      <Space h="xl" />
      <Center>
        <ScrollArea>
          <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Craft</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
      </Center>
      <Space h="lg" />
      <Center>
        {successAlert ? (
          <Alert
            title="Successful!"
            color="green"
            withCloseButton
            variant="filled"
            onClose={() => setSuccessAlert(false)}
            styles={{ width: "400px" }}
          >
            Your API call was successful!
          </Alert>
        ) : null}
        {errorAlert ? (
          <Alert
            title="Oops!"
            color="red"
            withCloseButton
            variant="filled"
            onClose={() => setErrorAlert(false)}
          >
            Something went wrong! Please try again!
          </Alert>
        ) : null}
      </Center>
    </>
  );
}

export default AstronautsTable;
