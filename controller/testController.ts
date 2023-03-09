import { Request, Response } from "express";
import { emailEnv } from "../email/email";
import testModel from "../model/test";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const newUser = await testModel.create({
      name,
      email,
      password,
    });
    emailEnv(newUser)
      .then((res) => console.log("this is res", res))
      .catch((err) => console.log("this is err", err));
    return res.status(200).json({
      message: "mail sent , go to your email to verify",
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error",
      data: error,
    });
  }
};

//get all

export const getAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await testModel.find();
    return res.status(200).json({
      message: "user gotten successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error",
      data: error,
    });
  }
};
