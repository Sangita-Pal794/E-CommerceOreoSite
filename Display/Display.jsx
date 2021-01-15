import { Typography, Link } from "@material-ui/core";
import React, { useEffect } from "react";
import TestImage from "../../assets/images/1.png"
import HomeIcon from "@material-ui/icons/Home";
import "./Display.scss";

export default function DashBoardNotes(props) {
  useEffect(() => {
    console.log(props.allProducts);
  }, [props.allProducts]);

  const product = props.allProducts.map((product) => {
    return (
      <div key={product.id} className="each-product">
        <div className="product-image">
          <img src={TestImage} alt="No" className="img-description"/>
        </div>
        <div className="product-details"></div>
      </div>
    );
  });

  return (
    <div className="oreo-body">
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
            eCommerce /
          </Link>
          <Link component="button" variant="caption">
            product
          </Link>
        </div>
      </div>
      <div className="body-content">
        <div className="all-products">{product}</div>
      </div>
    </div>
  );
}
