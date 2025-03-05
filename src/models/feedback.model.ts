import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./user.model.js";
import { IService } from "./service.model.js";

type Rating = "poor" | "good" | "excellent" | "average";
export interface IFeedback extends Document {
  rating: Rating;
  feedback: string;
  createdBy: IUser;
  service: IService;
}

const feedbackSchema = new Schema<IFeedback>(
  {
    rating: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback: Model<IFeedback> = mongoose.model<IFeedback>(
  "Feedback",
  feedbackSchema
);
export default Feedback;
