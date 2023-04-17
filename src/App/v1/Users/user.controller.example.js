import userModel from "./user.model.example.js";

// This function gets All Users
export const getAllUsers = async (request, response) => {
  try {
    const users = await userModel.find();

    response.status(200).json({
      code: 200,
      users,
    });
  } catch (err) {
    console.log(err);

    response.status(500).json({
      message: "Internal server error",
      code: 500,
    });
  }
};

// This function gets an user by id
export const getUserById = async (request, response) => {
  const { id } = request.params;

  try {
    const user = await userModel.findById(id);

    if (!user) {
      return response.status(404).json({
        message: "User not found",
        code: 404,
      });
    }

    response.status(200).json({
      message: "User found!",
      code: 200,
      user,
    });
  } catch (err) {
    console.log(err);

    response.status(500).json({
      message: "Internal server error",
      code: 500,
    });
  }
};

// This function creates an user
export const createUser = async (request, response) => {
  const { name, lastname, age, numberPhone, email } = request.body;

  if (!name || !lastname || !age || !numberPhone || !email) {
    return response.status(400).json({
      message: "Email and Password are required",
      code: 400,
    });
  }

  try {
    const user = await userModel.create({
      name,
      lastname,
      age,
      numberPhone,
      email,
    });

    response.status(201).json({
      message: "User Created",
      code: 201,
      user,
    });
  } catch (err) {
    console.log(err);

    response.status(500).json({
      message: "Internal server error",
      code: 500,
    });
  }
};

// This function updates an user
export const updateUser = async (request, response) => {
  const { id } = request.params;

  const data = request.body;

  try {
    const userUpdated = await userModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    response.status(200).json({
      message: "User updated",
      code: 200,
      userUpdated,
    });
  } catch (err) {
    console.log(err);

    response.status(500).json({
      message: "Internal server error",
      code: 500,
    });
  }
};

// This function deletes an user
export const deleteUser = async (request, response) => {
  const { id } = request.params;

  try {
    const userDeleted = await userModel.findByIdAndDelete(id);

    response.status(200).json({
      message: "User deleted",
      code: 200,
      userDeleted,
    });
  } catch (err) {
    console.log(err);

    response.status(500).json({
      message: "Internal server error",
      code: 500,
    });
  }
};
