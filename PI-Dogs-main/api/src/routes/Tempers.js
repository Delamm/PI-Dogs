const { parse } = require("dotenv");
const express = require("express");
const { Router } = require("express");
const router = Router();
const { Dog, Temper } = require("../db.js");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const dataApi = await axios.get("https://api.thedogapi.com/v1/breeds");
    const dogsTemper = await dataApi.data.map((e) => e.temperament);
    let dogsSplit = await dogsTemper.join().split(",");
    let dogsTrim = await dogsSplit.map((e) => e.trim());
    await dogsTrim.forEach(async (e) => {
      if (e.length > 0) {
        await Temper.findOrCreate({
          where: {
            name: e,
          },
        });
      }
    });

    const tempers = await Temper.findAll();

    return res.status(200).json(tempers);
  } catch (error) {
    res.status(404).send({ error: "No temperaments found" });
  }
});

module.exports = router;
