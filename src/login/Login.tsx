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
import {Header} from "../shared/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export const Login = () => {
  const handelSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  
    return (
      <form onSubmit={handelSubmit}>
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <Grid container>
          <Grid item xs />
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>
              <TextField id="standard-basic" label="Username" variant="standard" />
            </div>
            <div style={{ textAlign: "center" }}>
              <TextField id="standard-basic" label="Password" variant="standard" />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button type="submit">Enter Site</Button>
            </div>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
      </form>
    )
  }