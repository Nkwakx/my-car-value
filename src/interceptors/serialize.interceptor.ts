import { CallHandler, ExecutionContext, NestInterceptor} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';


export class SerializeInterceptor implements NestInterceptor{
constructor(private dto: any){}

     intercept(context: ExecutionContext, handler: CallHandler) : Observable<any>{
          // Run something before a request is handled by thw request handler

          return handler.handle().pipe(
               map((data: any) => {
                    // Run something before the response is sent out
                    return plainToInstance(this.dto, data, {
                         excludeExtraneousValues: true,
                    });
               })
          )
     }
}