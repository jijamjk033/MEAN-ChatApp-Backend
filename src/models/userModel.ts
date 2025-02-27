import mongoose, { Document } from "mongoose";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser {
    googleId: {};
    name: string;
    email: string;
    picture?: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema(
    {
        googleId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        picture: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);