import jwtDecode from 'jwt-decode';

const decodeJWT = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const decodedToken = decodeJWT(token);
if (decodedToken) {
  console.log(decodedToken);
} else {
  console.log("Invalid Token")
}