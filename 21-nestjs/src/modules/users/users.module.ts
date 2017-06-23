import { Module, Shared, MiddlewaresConsumer } from '@nestjs/common';
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthMiddleware } from "../../middleware/auth.middleware";
import { LoggingMiddleware } from "../../middleware/logging.middleware";

@Shared()
@Module({
    controllers: [UsersController],
    components: [UsersService],
    exports: [UsersService],
})
export class UsersModule {
    configure(consumer: MiddlewaresConsumer) {
        const roles = ['admin', 'user'];
        const options = {};
        consumer
            .apply(AuthMiddleware)
            .with(roles, options)
            .forRoutes(UsersController)
            .apply(LoggingMiddleware)
            .forRoutes(UsersController);
    }
}