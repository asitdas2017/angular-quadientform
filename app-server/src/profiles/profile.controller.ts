import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { CreateProfileDto } from './service-model/profile.dto';
import { ProfileService } from './profile.service';
import { IProfile } from './service-model/profile.interface';

@Controller('profiles')
export class ProfileController {

    constructor(private readonly profileService: ProfileService){}
    
    @Get()
    findAll(): Promise<IProfile[]> {
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<IProfile> {
        return this.profileService.findOne(id);
    }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto): Promise<IProfile[]> {
        return this.profileService.create(createProfileDto);
    }

    @Delete(':id')
    delete(@Param('id') id ): Promise<IProfile> {
        return this.profileService.delete(id);
    }

    @Put(':id')
    update(@Body() updateProfileDto: CreateProfileDto, @Param('id') id): Promise<IProfile> {
        return this.profileService.update(id, updateProfileDto);
    }

}