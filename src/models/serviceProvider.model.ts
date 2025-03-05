import mongoose, { Schema, Document, Model } from "mongoose";
import { ServiceType } from "./service.model.js";

export interface IServiceProvider extends Document {
  name: string;
  email: string;
  password: string;
  contact: string;
  address: string;
  skill: string;
  description: string;
  rating: number;
  availability: boolean;
  servicesOffered: ServiceType[];
  serviceHistory: mongoose.Types.ObjectId[];
}

const serviceProviderSchema = new Schema<IServiceProvider>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    servicesOffered: {
      type: [String],
      required: true,
    },
    serviceHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
  },
  { timestamps: true }
);

export const ServiceProvider: Model<IServiceProvider> =
  mongoose.model<IServiceProvider>("ServiceProvider", serviceProviderSchema);

export default ServiceProvider;
