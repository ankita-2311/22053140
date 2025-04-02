const axios = require("axios");
require("dotenv").config();

const BASE_URL = "http://20.244.56.144/evaluation-service";

async function getAuthToken() {  // ✅ Add async here
  try {
    const response = await axios.post('${BASE_URL}/auth', {  // ✅ Now await works
      email: process.env.EMAIL,
      rollNo: process.env.ROLL_NO,
      accessCode: process.env.ACCESS_CODE,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });

    return response.data["access token"];
  } catch (error) {
    console.error("Error fetching token:", error.response ? error.response.data : error.message);
    throw new Error("Authentication failed");
  }
}

module.exports = { getAuthToken };