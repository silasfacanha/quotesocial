const fetchPosts = async () => {
  const response = await fetch("http://localhost:3000/post");
  const data = await response.json();
  return data;
};

export default fetchPosts;
