const fetchMyOracula = async () => {
  const userId = localStorage.getItem("userId");
  const response = await fetch(`localhost:3000/myOraculum/${userId}`);
  const data = await response.json();
  return data;
};

export default fetchMyOracula;
