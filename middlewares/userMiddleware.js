require("dotenv").config();
const jwt = require("jsonwebtoken");
const userService = require("../app/services/userService");

module.exports = {
  async validateEmailRegister(req, res, next) {
    try {
      const user = await userService.getByEmail(req.body.email);
      if (user !== null) {
        res.status(400).json({
          status: false,
          message: "Email is already registered!",
        });
        return;
      }
      next();
    } catch (err) {
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  },

  async validateUpdate(req, res, next) {
    try {
      const { role, email } = req.body;
      if (role || email) {
        res.status(400).json({
          status: false,
          message: "You can't update role or email!",
        });
        return;
      }
      next();
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  },
  async authorize(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ")[1];
      const tokenPayload = jwt.verify(
        token,
        process.env.ACCESS_TOKEN || "secret"
      );

      req.user = await userService.getById(tokenPayload.id);
      if (!req.user) {
        res.status(401).json({
          status: false,
          message: "Anda tidak punya akses (Unauthorized)",
        });
        return;
      }

      next();
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        res.status(401).json({ message: "Token Expired" });
        return;
      }

      res.status(401).json({
        message: "Unauthorized",
      });
    }
  },

  

  async isBuyyer(req, res, next) {
    try {
      // add token role
      const bearerToken = req.headers.authorization;
      console.log(bearerToken);
      const token = bearerToken.split("Bearer ")[1];
      const tokenPayload = jwt.verify(
        token,
        process.env.ACCESS_TOKEN || "secret"
      );
      req.user = await userService.getById(tokenPayload.id);
      if (!(req.user.role === "BUYER")) {
        res.status(401).json({ message: "Anda bukan buyer" });
        return;
      }
      next();
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        res.status(401).json({ message: "Token Expired" });
        return;
      }
    }
  },

  async isSeller(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split("Bearer ")[1];
      const tokenPayload = jwt.verify(
        token,
        process.env.ACCESS_TOKEN || "secret"
      );

      const user = await userService.getById(tokenPayload.id);
      if (!(user.role === "SELLER")) {
        res.status(401).json({ message: "Anda bukan seller" });
        return;
      }
      next();
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        res.status(401).json({ message: "Token Expired" });
        return;
      }

      res.status(401).json({
        message: "Unauthorized",
      });
    }
  },
};