import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true},
})