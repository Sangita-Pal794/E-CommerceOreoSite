import React from "react";
import { Typography, Link } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TestImage from "../../assets/images/1.png";
import TestImage1 from "../../assets/images/2.png";
import "../secondDisplay/secondDisplay.scss";
import "./ThirdDisplay.scss";
export default function ThirdDisplay(props) {
  const product = props.allProducts.map((product) => {
    return (
      <div className="product-image-display">
        {product.id < 6 ? (
          product.id % 2 === 1 ? (
            <img src={TestImage} alt="No" className="img-description-display" />
          ) : (
            <img
              src={TestImage1}
              alt="No"
              className="img-description-display"
            />
          )
        ) : undefined}
      </div>
    );
  });

  return (
    <div className="oreo-body-container">
      <div className="empty-container-one">
        <div className="body-header-one">
          <div className="header-one-two">
            <Typography variant="body2" className="title-one">
              Product Detail
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
              {"Oreo /"}
            </Link>
            <Link
              component="button"
              variant="caption"
              className="body-header-link-next"
            >
              eCommerce
            </Link>
            <Link component="button" variant="caption">
              {" / Product Detail"}
            </Link>
          </div>
        </div>
      </div>
      <div className="body-content-one">
        <div className="first-part-body-content">
          <div className="product-display">
            <div className="product-image">
              <div className="image-container">
                <img src={TestImage} alt="No" className="img-description" />
              </div>
              <div className="second-part-body-content-third">
                <div className="first-line">
                  <Typography fontSize="large" color="textPrimary">
                    Simple Black Clock
                  </Typography>
                </div>
                <div className="second-line">
                  <Typography fontSize="large" color="yellow">Current price:$180</Typography>
                </div>
                <div className="rating">
                  <div className="rating-left">
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarBorderOutlinedIcon fontSize="small" />
                  </div>
                  <div className="rating-right">
                    <Typography color="textSecondary" variant="caption">
                      (41 reviews)
                    </Typography>
                  </div>
                </div>
                <div className="product-description">
                  <div className="first-para">
                    <Typography color="textSecondary" variant="caption">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque sed assumenda ullam aliquid illum amet reprehenderit
                      praesentium in, molestias recusandae. Dolor id possimus
                      asperiores veritatis reiciendis, perspiciatis maxime
                      debitis itaque?
                    </Typography>
                  </div>
                  <div className="second-para">
                    <Typography fontSize="small">78%</Typography>
                    <Typography
                      color="textSecondary"
                      variant="caption"
                      className="voting-count"
                    >
                      of the buyers enjoyed this product!
                    </Typography>
                    <Typography fontSize="small">(23 votes)</Typography>
                  </div>
                </div>
                <div
                  fontSize="large"
                  color="textSecondary"
                  className="size-variant"
                >
                  <div className="left-size-part">SiZes: </div>
                  <div className="right-size-part"> s m l xl</div>
                </div>
                <div className="color-variant">
                  <div className="left-part-color-variant">colors: </div>
                  <div className="right-part-color-variant">
                    <CheckBoxOutlineBlankSharpIcon color="#ffe670" />
                    <CheckBoxOutlineBlankSharpIcon />
                    <CheckBoxOutlineBlankSharpIcon />
                  </div>
                </div>
                <div className="add-to-cart">
                  <div variant="body1" className="cart">
                    Add to cart
                  </div>
                  <div className="fav">
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="multiple-product">{product}</div>
          </div>
        </div>
      </div>
      <div className="second-part-body-content">
        <div color="textSecondary" variant="caption" className="option active">
          Description
        </div>
        <div color="textSecondary" variant="caption" className="option">
          Review
        </div>
        <div color="textSecondary" variant="caption" className="option">
          About
        </div>
      </div>
    </div>
  );
}
