import React from "react";
import { Link } from "react-router-dom";
import classes from "styles/Page.module.css";

export default function Page(props) {
  if (props.variant === "404")
    return (
      <div className={classes.Route404}>
        <h1>404</h1>
        <h2>There's Nothing Here</h2>
        <div className={classes.Links}>
          <Link to={`${process.env.PUBLIC_URL}/palette/new`}>
            Create Palette
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/`}>All Palettes</Link>
        </div>
      </div>
    );
  return <section className={classes.Page}>{props.children}</section>;
}
