import express from "express";
import {
    createTour,
    deleteTour,
    getSingleTour,
    updateTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount,
} from "../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/", createTour);

// update new tour
router.put("/:id", updateTour);

// delete tour
router.delete("/:id", deleteTour);

// get single  tour
router.get("/:id", getSingleTour);

// get all  tour
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
