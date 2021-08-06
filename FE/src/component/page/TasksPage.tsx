import React, { useState } from "react";
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { useEffect } from "react";
import { fetchTasks, taskI } from "../../api/Api";

const useStyles = makeStyles({
  table: {
    maxWidth: "850px",
    margin: 'auto',
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
  },
  tableRow: {
    '&:nth-of-type(odd)': {
        backgroundColor: "white",
    },
    '&:nth-of-type(even)': {
        backgroundColor: "#f0f0f0",
    },
    "&:hover": {
        backgroundColor: "#dfdfdf !important",
    },
  },
  tableCell: {
    paddingLeft: "21px",
  },
});

export default function TasksPage() {
  const classes = useStyles();
  const [rows, setRows] = useState<taskI[]>([]);

  useEffect(() => {
    fetchTasks(setRows);
  }, [setRows]);

  return (
    <TableContainer className={classes.table} component={Paper} elevation={1}>
      <Table>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
              className={classes.tableRow} 
              key={index+1} 
              hover 
              onClick={() => {}}
            >
              <TableCell className={classes.tableCell}>{index+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shortDescription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}