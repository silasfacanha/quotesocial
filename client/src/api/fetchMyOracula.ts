const fetchMyOracula = async () => {
    const response = await fetch('localhost:3000/myOraculum/646b4c49dd0236f6194963fe');
    const data = await response.json();
    return data;
    }

    export default fetchMyOracula;

