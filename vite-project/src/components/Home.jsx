import React, { useState } from "react";

const Home = () => {
  const { blogs, setBlogs } = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "mario",
      id: 1,
    },
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "kenny",
      id: 2,
    },
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "aburo",
      id: 3,
    },
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "kalli",
      id: 4,
    },
  ]);
  //   return (
  //     <div className="home">
  //       {blogs.map((blog) => (
  //         <div className="blog-preview" key={blog.id}>
  //           <h2>{blog.title}</h2>
  //           <p>Written by {blog.author}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
};

export default Home;
