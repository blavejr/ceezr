import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://admin:4iEuzqbMWGUM0SOG@cluster0.sucagj4.mongodb.net/?retryWrites=true&w=majority')],
  })
export class DatabaseModule implements OnModuleInit {
    constructor(private readonly logger:Logger){}
    onModuleInit() {
        this.logger.log('DB STUFF')
    }
}
