import { IsNumber, IsString, Min, Max, IsLatitude, IsLongitude } from "class-validator";


export class CreateReportDto{
    
     @IsString()
     make: string;

     @IsString()
     model: number;

     @IsNumber()
     @Min(1930)
     @Max(2050)
     year: number;

     @IsLongitude()
     lng: number;

     @IsLatitude()
     lat: number;

     @IsNumber()
     @Min(0)
     @Max(1000000)
     price: number;


     @IsNumber()
     @Min(0)
     @Max(1000000)
     mileage: number;
}