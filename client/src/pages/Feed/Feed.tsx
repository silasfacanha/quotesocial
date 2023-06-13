import { useQuery } from "react-query";
import React from "react";
import { useState, useEffect } from "react";
import IPost from "../../../../shared/Interfaces/IPost";
import { Mongoose, Schema } from "mongoose";
import fetchPosts from "../../api/fetchPosts";
import { Grid } from "@mui/material";
function Feed() {
  const { isLoading, error, data } = useQuery("posts", fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  return (
    <Grid container>
      {data.map((post: any) => (
        <Grid item xs={12} sm={8} md={6}>
          <h1> {post.postText} </h1>
        </Grid>
      ))}
    </Grid>
  );
}
export default Feed;
