import { Global, Logger, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

@Global()
@Module({
    imports: [DatabaseModule],
    providers:[Logger],
    exports: [Logger, DatabaseModule]
})
export class GlobalModule {}
