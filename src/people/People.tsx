import React from "react"
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
  Grid,
  Box,
  Link,
  Pagination,
} from "@mui/material"
import './App.css'
import people from "../data/people.json"
import { Search } from "../search/Search"
export const People = () => {
  return (
    <div style={{ margin: "0 0.5em"}}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>People</Typography>
      <Search />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Birth Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.results.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.gender}</TableCell>
                <TableCell align="left">{item.birth_year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} />
    </div>
  )
}