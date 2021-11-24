import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const FormImage = ({ image }) => (
  <ImageList cols={1}>
    <ImageListItem
      sx={{ display: "grid", placeItems: "center", height: "100vh" }}
    >
      <img src={image} style={{ maxWidth: "65%" }} alt="Could not Load" />
    </ImageListItem>
  </ImageList>
);

export default FormImage;
