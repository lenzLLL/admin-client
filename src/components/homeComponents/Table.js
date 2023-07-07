import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#34495e",
    color: theme.palette.common.white,
    fontWeight:"bold",
    fontFamily:"Poppins",
    fontSize:"18px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight:"bold",
    fontFamily:"Poppins"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: string,
  product: string,
  username: number,
  qte: number,
  prix_unitaire: number,
  prix_total: number,
  type_paiement:String,
  statut:string

) {
  return { id, product, username, qte,prix_unitaire,prix_total,type_paiement,statut};
}

const rows = [
  createData('#23E3EZ32ZZd','Nike Xs', "Mike", 6,8000, 48000,"Paypal","En Cours"),
  createData('#23E3EZ32ZZd','Nike Xs', "Mike", 6,8000, 48000,"Paypal","En Cours"),
  createData('#23E3EZ32ZZd','Nike Xs', "Mike", 6,8000, 48000,"Paypal","En Cours"),
  createData('#23E3EZ32ZZd','Nike Xs', "Mike", 6,8000, 48000,"Paypal","En Cours"),
  createData('#23E3EZ32ZZd','Nike Xs', "Mike", 6,8000, 48000,"Paypal","En Cours"),
  createData('#23E3EZ32ZZd','Nike Xs', "Mike", 6,8000, 48000,"Paypal","En Cours"),
 
  
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} className ="overflow-y-visible font-bold">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style = {{backgroundColor:"red"}}>
          <TableRow>
            <StyledTableCell align ="left">Id</StyledTableCell>
            <StyledTableCell align="left">Produit</StyledTableCell>
            <StyledTableCell align="left">Client</StyledTableCell>
            <StyledTableCell align="left">Quantité</StyledTableCell>
            <StyledTableCell align="left">Prix unitaire</StyledTableCell>
            <StyledTableCell align="left">Prix Total</StyledTableCell>
            <StyledTableCell align="left">Type paiement</StyledTableCell>
            <StyledTableCell align="left">Statut</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align = "left">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.product}</StyledTableCell>
              <StyledTableCell align="left">{row.username}</StyledTableCell>
              <StyledTableCell align="left">{row.qte}</StyledTableCell>
              <StyledTableCell align="left">{row.prix_unitaire}</StyledTableCell>
              <StyledTableCell align="left">{row.prix_total}</StyledTableCell>
              <StyledTableCell align="left">{row.type_paiement}</StyledTableCell>
              <StyledTableCell align="left">{row.statut}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}