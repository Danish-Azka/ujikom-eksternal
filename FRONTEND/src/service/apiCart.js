
import axios from 'axios';

export const getCart = async () => {
  try {
    const response = await axios.get('http://localhost:3009/cart/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching carts:', error);
    return [];
  }
};

export const getCartByBuyerId = async () => {
  try {
    const BuyerId = localStorage.getItem("idBuyer"); 
    if (!BuyerId) {
      throw new Error("BuyerId tidak ditemukan di localStorage");
    }

    const response = await axios.get(`http://localhost:3009/cart/buyer/${BuyerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const API_URL = 'http://localhost:3009/cart/post';

export const createCart = async (cartData) => {
  try {
    const response = await axios.post(API_URL, cartData);
    return response.data;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
};

export const deleteCart = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3009/cart/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting Employe", error);
    throw(error);
  }
};

export const getCartById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching client:", error);
    throw error;
  }
};

export const editCart = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3009/cart/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};