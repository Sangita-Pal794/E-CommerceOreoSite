import { Typography, Link, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import TestImage from "../../assets/images/1.png";
import TestImage1 from "../../assets/images/3.png";
import HomeIcon from "@material-ui/icons/Home";
import "./Display.scss";

export default function DashBoardNotes(props) {
  useEffect(() => {
    console.log(props.allProducts);
  }, [props.allProducts]);

  const product = props.allProducts.map((product) => {
    return (
      <Grid
        item
        lg={3}
        md={3}
        sm={4}
        xs={12}
        key={product.id}
        className="each-product"
      >
        <div className="product-image">{
          product.id % 2 === 1 ? <img src={TestImage} alt="No" className="img-description" /> : <img src={TestImage1} alt="No" className="img-description" />
        }
        </div>
        <div className="product-details">
          <Typography variant="body2" color="textSecondary">{product.productname}</Typography>
          <div className="product-price">
          <Typography variant="body2" className="actual-price">{product.originalprice}</Typography>
          <Typography variant="body2" className="discounted-price">{product.discountedprice}</Typography>

          </div>
          </div>
      </Grid>
    );
  });

  return (
    <div className="oreo-body">
      <div className="empty-container">       

      <div className="body-header">
        <div className="header-one">
          <Typography variant="body2" className="title">
            Product
          </Typography>
          <Typography variant="caption" className="title">
            Welcome to Oreo
          </Typography>
        </div>
        <div className="header-two">
          <HomeIcon fontSize="small" className="home-icon" />
          <Link
            component="button"
            variant="caption"
            className="body-header-link"
          >
            Home /
          </Link>
          <Link
            component="button"
            variant="caption"
            className="body-header-link"
          >
            eCommerce 
          </Link>
          <Link component="button" variant="caption">
            {" / product"}
          </Link>
        </div>
      </div>
      </div>
      <div className="body-content">
        <Grid container wrap justify="flex-start" spacing={2} className="all-products">
          {product}
        </Grid>
      </div>
    </div>
  );
}
