import { Table, Group, Text, Anchor, ScrollArea } from "@mantine/core";
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
  );
}

AstronautsTable.propTypes = {
  astronautList: PropTypes.array,
};

export default AstronautsTable;
