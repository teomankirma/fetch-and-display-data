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

function AstronautsTable() {
  const [astronauts, setAstronauts] = useState([]);

  const handleClick = async function () {
    try {
      const result = await fetch("http://api.open-notify.org/astros.json");
      const data = await result.json();

      setAstronauts(data.people);
    } catch (err) {
      console.log(err);
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
    <div>
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
    </div>
  );
}

export default AstronautsTable;
