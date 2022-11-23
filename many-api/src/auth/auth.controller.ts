import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    findAll(): { message: string } {
        return { message: 'Should Return All the DB values' };
    };

    @Get('name')
    anyName(): { message: string } {
        return { message: 'Should Return a name from the DB' };
    }
}
