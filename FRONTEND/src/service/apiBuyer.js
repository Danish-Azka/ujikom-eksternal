import axios from "axios";

const API_URL = 'http://localhost:3009/buyer/post';

export const createBuyer = async (BuyerData) => {
  try {
    const response = await axios.post(API_URL, BuyerData);
    return response.data;
  } catch (error) {
    console.error('Error creating Buyer:', error);
    throw error;
  }
};