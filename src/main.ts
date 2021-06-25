import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { ppid } from "process"
import {AppModule} from './app.module'

async function start(){
    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    console.log(123213,process.env.POSTGRES_PASSWORD, typeof process.env.POSTGRES_PASSWORD);
    


    const config = new DocumentBuilder()
        .setTitle('Online burger restraunt')
        .setDescription('')
        .setVersion('1.0.0')
        .addTag('Online restraunt')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`))

}

start()