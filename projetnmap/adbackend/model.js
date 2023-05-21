import mongoose from "mongoose";
import schemadb from "./schemadb.js";

const model = mongoose.model("model", schemadb);

export default model;
