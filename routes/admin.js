import express from "express";
import {
  allChats,
  allMessages,
  allUsers,
  getDashboardStats,
} from "../controllers/admin.js";
import {
  adminLogin,
  adminLogout,
  getAdminData,
} from "../controllers/adminVerify.js";
import { adminLoginValidator, validateHandler } from "../lib/validators.js";
import { adminOnly } from "../middlewares/auth.js";


const app = express.Router();

app.post("/verify", adminLoginValidator(), validateHandler, adminLogin);

app.get("/logout", adminLogout);

// Only Admin Can Accecss these Routes

app.use(adminOnly);

app.get("/", getAdminData);

app.get("/users", allUsers);
app.get("/chats", allChats);
app.get("/messages", allMessages);

app.get("/stats", getDashboardStats);


export default app;
