import { Document } from 'mongoose';

export interface User extends Document {
    readonly login: string;
    readonly password: string;
    readonly email: string;
    readonly fullName: string;
    readonly phone: string;
    readonly gender: string;
}