import { IUser, User } from "../models/userModel";

class UserRepository{
    async findUserByEmail(email: string) {
        const user = await User.findOne({ email: email }) as IUser | null;

        if (!user) {
            return null;
        }
        return user;
    }

    async findByGoogleId(googleId: string) {
        const user = await User.findOne({ googleId }) as IUser | null;

        if (!user) {
            return null;
        }
        return user;
    }

    async createUser(userData: Partial<IUser>) {
        const user = new User(userData);
        const savedUser = await user.save();
        return savedUser.toObject() as unknown as IUser;
    }
}

export const userRepository = new UserRepository();