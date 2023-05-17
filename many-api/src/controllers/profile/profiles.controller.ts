import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// Services
import { AppService } from '../../services/app.service';
import { ProfilesService } from 'src/services/profiles.service';

// Models
import { Profile } from 'src/database/models/profile.model';

@Controller('profile')
export class ProfilesController {
    constructor(private readonly appService: AppService, private profilesService: ProfilesService) {}
    
    @Get()
    async allProfiles(): Promise<{
        success: boolean,
        info?: string,
        profilesList?: Partial<Profile[]>
    }> {
        try{
            const profilesList = await this.profilesService.findAll();
            if(profilesList) return { success: true, profilesList: profilesList, info: 'Profile list getted successfully' };

            return { success: true, info: 'Could not create new profile' };

        } catch(err) {
            return { success: false, info: 'Something went wrong' };
        }
    };

    @Get(':email')
    async profileByEmail(
        @Param('email') email: string
    ): Promise<{
        success: boolean,
        info?: string,
        profile?: Partial<Profile>
    }> {
        try{
            const profile = await this.profilesService.findByEmail(email);
            if(profile) return { success: true, profile: { id: profile.id, email: profile.email, phone: profile.phone}, info: 'Profile found successfully' };

            return { success: true, info: 'Could not found new profile' };

        } catch(err) {
            return { success: false, info: 'Something went wrong' };
        }
    };
    
    @Post('create')
    async createProfile(
        @Body() body: Partial<Profile>
    ): Promise<{
        success: boolean,
        info?: string,
        profile?: Partial<Profile>
    }> {
        try{
            const profile = await this.profilesService.createProfile(body);
            if(profile) return { success: true, profile: { id: profile.id, username: profile.username, email: profile.email, phone: profile.phone}, info: 'Profile created successfully' };

            return { success: true, info: 'Could not create new profile' };

        } catch(err){
            return { success: false, info: 'Something went wrong' };
        }
    }
}
