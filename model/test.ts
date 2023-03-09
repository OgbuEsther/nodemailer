import mongoose from "mongoose";

interface user {
  name: string;
  email: string;
  password: string;
}

interface IUser extends user, mongoose.Document {}

const testSchema = new mongoose.Schema<user>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const testModel = mongoose.model<IUser>("user", testSchema);
export default testModel;
