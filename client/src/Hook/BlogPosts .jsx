import { useState, useEffect } from "react";
import axios from "axios";

function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const GetPostBlog = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
      setBlogPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    GetPostBlog();
  }, []);

  return { blogPosts, isLoading, isError };
}

export default useBlogPosts;
