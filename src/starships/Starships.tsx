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
import starships from "../data/starships.json"
import { Search } from "../search/Search"
const Starships = () => {
    return (
      <div style={{ margin: "0 0.5em"}}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>Starships</Typography>
        <Search />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Manufacture</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {starships.results.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.model}</TableCell>
                  <TableCell align="left">{item.manufacturer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination count={10} />
      </div>
    )
  }