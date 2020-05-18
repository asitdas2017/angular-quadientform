import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IProfile } from './service-model/profile.interface';

@Injectable()
export class ProfileService {

    constructor (@InjectModel('Profile') private readonly profileModel:Model<IProfile> ) {}

    async findAll(): Promise<IProfile[]> {
        // return this.profiles;
        return this.profileModel.find();
    };

    async findOne(id: string):  Promise<IProfile> {
        // return this.profiles.find(profile => profile.id === id)
        return this.profileModel.findOne({_id: id});
    };

    async create(profile: IProfile): Promise<IProfile[]> {
        const newProfile = new this.profileModel(profile);
        return newProfile.save();
    }

    async delete(id: string): Promise<IProfile> {
        return this.profileModel.findByIdAndRemove(id);
    }

    async update(id: string, profile: IProfile): Promise<IProfile> {
        return this.profileModel.findByIdAndUpdate(id, profile, {new: true});
    }
}