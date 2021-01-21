import React from "react";
import { Typography, Link, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
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
            <div className="multiple-product">{product}</div>

              </div>

              <div className="second-part-body-content-third">
                <div className="first-line">
                  <Typography fontSize="large" color="textPrimary" variant="body1">
                    Simple Black Clock
                  </Typography>
                </div>
                <div className="second-line">
                  <Typography fontSize="large" color="yellow" variant="body2">
                    Current price:
                  </Typography>
                  <Typography fontSize="large" color="yellow" variant="body2" className="second-line-text">
                    $180
                  </Typography>
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
                  <div className="second-para" variant="caption">
                    <Typography className="simple-text">78%</Typography>
                    <Typography
                      color="textSecondary"
                      variant="caption"
                      className="voting-count"
                    >
                      of the buyers enjoyed this product!
                    </Typography>
                    <Typography className="simple-text" variant="caption">(23 votes)</Typography>
                  </div>
                </div>
                <div
                  fontSize="large"
                  color="textPrimary"
                  className="size-variant"
                >
                  <div className="left-size-part">sizes: </div>
                  <div className="right-size-part"> s m l xl</div>
                </div>
                <div className="color-variant">
                  <div className="left-part-color-variant">colors: </div>
                  <div className="right-part-color-variant">
                    <div className="first-color">
                      <IconButton><ClearOutlinedIcon/></IconButton>
                    </div>
                    <div className="second-color">
                      <IconButton></IconButton>
                    </div>
                    <div className="third-color">
                      <IconButton></IconButton>
                    </div>
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
            {/* <div className="multiple-product">{product}</div> */}
          </div>
        </div>
      </div>
      <div className="second-part-body-content">
        <div color="textSecondary" variant="caption" className="option-one active">
          Description
        </div>
        <div color="textSecondary" variant="caption" className="option">
          Review
        </div>
        <div color="textSecondary" variant="caption" className="option">
          About
        </div>
      </div>
      <div className="third-part-body-content">
        <Typography color="textSecondary" variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore quam accusantium atque impedit accusamus laboriosam neque ex quae cum dignissimos earum, nemo iste laudantium?</Typography>
      </div>
    </div>
  );
}
