import React from "react";
import TestImage from "../../assets/images/1.png";
import TestImage1 from "../../assets/images/3.png";
import HomeIcon from "@material-ui/icons/Home";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from '@material-ui/lab/Pagination';
import "./secondDisplay.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SecondDisplay(props) {
  const classes = useStyles();

  const product = props.allProducts.map((product) => {
    return (
      <TableRow key={product.id}>
        <TableCell component="th" scope="row">
          <div className="product-image-one">
            {product.id % 2 === 1 ? (
              <img src={TestImage} alt="No" className="img-description-one" />
            ) : (
              <img src={TestImage1} alt="No" className="img-description-one" />
            )}
          </div>
        </TableCell>
        <TableCell align="left">{product.productname}</TableCell>
        <TableCell align="left">{product.detail}</TableCell>
        <TableCell align="right">{product.originalprice}</TableCell>
        <TableCell align="right">{product.stock}</TableCell>
        <TableCell align="right" className="edit-icon">
          <div className="parent-action-button">
            <div className="action-button">
              <EditIcon className="action-button-color"/>
            </div>
            <div className="action-button">
              <DeleteIcon className="action-button-color"/>
            </div>
          </div>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className="oreo-body-container">
      <div className="empty-container-one">
        <div className="body-header-one">
          <div className="header-one-two">
            <Typography variant="body2" className="title-one">
              Product
            </Typography>
            <Typography variant="caption" className="title-one">
              Welcome to Oreo
            </Typography>
          </div>
          <div className="header-two-one">
            <HomeIcon fontSize="small" className="home-icon-one" />
            <Link
              component="button"
              variant="caption"
              className="body-header-link-next"
            >
              Home /
            </Link>
            <Link
              component="button"
              variant="caption"
              className="body-header-link-next"
            >
              eCommerce
            </Link>
            <Link component="button" variant="caption">
              {" / product List"}
            </Link>
          </div>
        </div>
      </div>
      <div className="body-content-one">
        <div className="first-part-body-content">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="left">Detail</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>{product}</TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="second-part-body-content">
        <Pagination count={10} color="primary" />
        </div>
      </div>
    </div>
  );
}
