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
import React from "react";
import PropTypes from "prop-types";

function AstronautsTable(props) {
  const rows = props.astronautList.map((item, index) => (
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
        <Button color="dark" radius="xl" size="md" onClick={props.func}>
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

AstronautsTable.propTypes = {
  astronautList: PropTypes.array,
};

export default AstronautsTable;
