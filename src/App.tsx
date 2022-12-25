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
  Pagination,
} from "@mui/material"
import people from "./data/people.json"
import './App.css'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import {Login} from "./login/Login"
import {Header} from "./shared/header/Header"


// Root application
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Login />}></Route>
    <Route path="/header" element={<Header />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
