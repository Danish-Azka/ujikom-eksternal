
import axios from 'axios';

export const getShop = async () => {
  try {
    const response = await axios.get('http://localhost:3009/shop/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching Shops:', error);
    return [];
  }
};

const API_URL = 'http://localhost:3009/shop/post';

export const createShop = async (ShopData) => {
  try {
    const response = await axios.post(API_URL, ShopData);
    return response.data;
  } catch (error) {
    console.error('Error creating Shop:', error);
    throw error;    
  }
};

export const deleteShop = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3009/shop/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting Shop", error);
    throw(error);
  }
};

export const getShopById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009/shop/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Shop:", error);
    throw error;
  }
};

export const editShop = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3009/shop/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating Shop:", error);
    throw error;
  }
};
