import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { userService } from "../service/userService";
import { createErrorResponse, createSuccessResponse } from "../helpers/responseHelpers";

class UserController {
    async googleLogin(req: Request, res: Response) {
        try {
            const user = await userService.loginWithGoogle(req.body);
            res.status(StatusCodes.OK).json(createSuccessResponse(user, "Login successful"));
            console.log("User logged in:", user);
            
        } catch (error) {
            console.error("Google login error:", error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(createErrorResponse("Internal Server Error"));
        }
    }
}

export const userController = new UserController();