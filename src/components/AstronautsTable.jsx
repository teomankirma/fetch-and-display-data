import {
  Table,
  Group,
  Text,
  Anchor,
  ScrollArea,
  Button,
  Center,
  Space,
} from "@mantine/core";
import React, { useState } from "react";
import StateHandler from "./StateHandler";

function AstronautsTable() {
  const [astronauts, setAstronauts] = useState([]);

  const [state, setState] = useState({
    loading: null,
    success: null,
    error: null,
  });

  function closeButtonHandler() {
    setState({ loading: false, success: false, error: false });
  }

  const handleClick = async function () {
    setState({ loading: true, success: null, error: null });
    try {
      const result = await fetch(
        "https://teomankirma.github.io/json-api/astronauts.json"
      );
      const data = await result.json();

      setAstronauts(data.people);
      setState({ loading: false, success: true, error: null });
    } catch (err) {
      setState({ loading: false, success: null, error: true });
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
      <StateHandler
        showError={state.error}
        showLoader={state.loading}
        showSuccess={state.success}
        closeButton={closeButtonHandler}
      />
    </>
  );
}

export default AstronautsTable;
