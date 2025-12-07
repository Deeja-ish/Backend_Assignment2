const express = require("express");
const User = require("../models/User");

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({users, count: users.length})
    } catch (error) {
        return res.status(500).json({message: `Server error`, error})
    }
}

// create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, age, classDetails } = req.body
        const addUser = await User.create({
            name,
            email,
            age,
            classDetails
        })
        return res.status(200).json({addUser})
    } catch (error) {
        res.status(500).json({message: `User not created`})
    }

}

// update a new user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, age, classDetails } = req.body
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {name, email, age, classDetails },
            { new: true }
        );

        return res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: `Server Error`})
    }
};

//  delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.status(200).json({message: `User deleted Successfully`})
    } catch (error) {
        res.status(500).json({message: `Server error`})
    }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };

