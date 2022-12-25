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
import '../App.css'
export const Search = () => {
    return (
      <div>
        <TextField id="" label="Search" size="small" />
        <Button>Search</Button>
      </div>
    )
  }