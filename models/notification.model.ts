import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./user.model";

export interface INotification extends Document {
  title: string;
  message: string;
  status: string;
  user: string;
}

const notificationSchema = new Schema<INotification>(
  {
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "unread"
    }
  },
  {
    timestamps: true,
  }
);

const NotificationModel: Model<INotification> = mongoose.model("Nofification", notificationSchema);
export default NotificationModel;