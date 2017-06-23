import { Module } from '@nestjs/common';
import { UsersModule } from "./users/users.module";

@Module({
    modules: [
        UsersModule
    ],
    controllers: [
        
    ],
    components: [
        
    ],
})
export class ApplicationModule { }