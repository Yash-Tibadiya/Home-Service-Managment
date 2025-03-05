import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./user.model.js";
import { IServiceProvider } from "./serviceProvider.model.js";

export type ServiceType =
  | "plumbing"
  | "gardening"
  | "furnishing"
  | "wiring"
  | "cleaning";

export interface IService extends Document {
  serviceType: ServiceType;
  description: string;
  createdBy: IUser;
  providedBy: IServiceProvider;
  isCompleted: boolean;
  charge: number;
  startTime: Date;
  endTime: Date;
}

const serviceSchema = new Schema<IService>(
  {
    serviceType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    providedBy: {
      type: Schema.Types.ObjectId,
      ref: "ServiceProvider",
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    charge: {
      type: Number,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Service: Model<IService> = mongoose.model<IService>(
  "Service",
  serviceSchema
);

export default Service;
