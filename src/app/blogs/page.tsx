import React from "react";
import BlogUIContainer from "@/containers/BlogUIContainer";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import PostsComponent from "@/components/PostsComponent";

type Props = {};
const allPostsQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Blogs = async (props: Props) => {
  const allPosts = await sanityClient.fetch(allPostsQuery);

  return (
    <>
      <BlogUIContainer />

      {/* Blogs Container */}
      <PostsComponent posts={allPosts} />
    </>
  );
};

export default Blogs;
