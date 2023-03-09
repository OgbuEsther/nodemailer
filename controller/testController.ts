import { Request, Response } from "express";

import testModel from "../model/test";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const user = await testModel.create({
      name,
      email,
      password,
    });
    return res.status(200).json({
      message: "user created successfully",
      data: user,
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
