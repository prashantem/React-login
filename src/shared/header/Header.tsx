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
import '../../App.css'
export const Header = () => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      style={{ textAlign: "center" }}
    >
      <Link href="/People">People</Link>
      <Link href="/Starships"><strong>Starships</strong></Link>
      <span><em>username</em></span>
    </Box>
  )
}