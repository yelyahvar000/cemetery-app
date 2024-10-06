import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";



export default function BasicTable({ rows = [], headers = [], buttons = [], onAction = null}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item) => {
              return <TableCell sx={{ fontWeight: "800" }}>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const data = Object.values(row);
            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {data.map((item, index) => {
                  return (
                    <TableCell
                      key={`${row.name}-${index}`}
                      component="th"
                      scope="row"
                    >
                      {item}
                    </TableCell>
                  );
                })}
                <TableCell>
                  <Stack direction={'row'} spacing={1}>
                    {buttons.map((button) => {
                      return (
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => onAction(button.name, row)}
                        >
                          {button?.name}
                        </Button>
                      );
                    })}
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
