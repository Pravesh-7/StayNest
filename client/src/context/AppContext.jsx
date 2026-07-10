import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || "An unexpected error occurred";
    toast.error(message);
    return Promise.reject(error);
  }
);

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const navigate = useNavigate();

  const { user } = useUser();
  const { getToken } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      if (data.success) {
        setRooms(data.rooms);
      }
    } catch (error) {
      console.error("[Fetch Rooms Error]", error);
    }
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities);
      }
    } catch (error) {
      // Avoid infinite retry loops on 401s or 404s, but retry on network errors if necessary
      if (!error.response) {
        setTimeout(() => {
          fetchUser();
        }, 5000);
      }
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  useEffect(() => {
    fetchRooms()
  }, [])
  

  const value = {
    currency,
    rooms,
    setRooms,
    navigate,
    user,
    getToken,
    isOwner,
    setIsOwner,
    axios,
    showHotelReg,
    setShowHotelReg,
    searchedCities,
    setSearchedCities,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

import { useContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
