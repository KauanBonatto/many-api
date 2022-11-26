import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// Services
import { AppService } from '../../services/app.service';
import { UsersService } from 'src/services/users.service';

// Models
import { User } from 'src/database/models/user.model';

@Controller('user')
export class UsersController {
    constructor(private readonly appService: AppService, private usersService: UsersService) {}
    
    @Get()
    async allUsers(): Promise<{
        success: boolean,
        info?: string,
        usersList?: Partial<User[]>
    }> {
        try{
            const usersList = await this.usersService.findAll();
            if(usersList) return { success: true, usersList: usersList, info: 'User list getted successfully' };

            return { success: true, info: 'Could not create new user' };

        } catch(err) {
            return { success: false, info: 'Something went wrong' };
        }
    };

    @Get(':email')
    async userByEmail(
        @Param('email') email: string
    ): Promise<{
        success: boolean,
        info?: string,
        user?: Partial<User>
    }> {
        try{
            const user = await this.usersService.findByEmail(email);
            if(user) return { success: true, user: { id: user.id, email: user.email, phone: user.phone}, info: 'User found successfully' };

            return { success: true, info: 'Could not found new user' };

        } catch(err) {
            return { success: false, info: 'Something went wrong' };
        }
    };
    
    @Post('create')
    async createUser(
        @Body() body: Partial<User>
    ): Promise<{
        success: boolean,
        info?: string,
        user?: Partial<User>
    }> {
        try{
            const user = await this.usersService.createUser(body);
            if(user) return { success: true, user: { id: user.id, email: user.email, phone: user.phone}, info: 'User created successfully' };

            return { success: true, info: 'Could not create new user' };

        } catch(err){
            return { success: false, info: 'Something went wrong' };
        }
    }
}
