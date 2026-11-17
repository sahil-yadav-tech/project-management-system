import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
    res.json({
        message: "Register API"
    });
});

router.get("/login", (req, res) => {
  return  res.send({
        message: "Login API"
    });
});

export default router;