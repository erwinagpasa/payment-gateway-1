import {
  IsString,
  IsEmail,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
  IsISO8601,
  IsUUID,
  IsBoolean,
  IsInt,
} from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class GenericAddressInput {
  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  streetName?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  houseNumber?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  division?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  barangay?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  municipality?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  province?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  postalCode?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  country?: string;
}

export class CreateUserInput {
  @ApiProperty()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fullname?: string;

  @ApiProperty()
  @Type(() => GenericAddressInput)
  @ValidateNested()
  @IsOptional()
  primaryAddress?: GenericAddressInput;

  @ApiProperty()
  @Type(() => GenericAddressInput)
  @ValidateNested()
  @IsOptional()
  secondaryAddress?: GenericAddressInput;

  @ApiProperty()
  @IsISO8601({ strict: true })
  @IsOptional()
  birthDate?: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  mobileNumber?: string;
}

export class GenericUserClass {
  @ApiProperty()
  @Expose()
  @IsInt()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  uuid: string;

  @ApiProperty()
  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fullname?: string;

  @ApiProperty()
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => GenericAddressInput)
  @IsOptional()
  primaryAddress?: GenericAddressInput;

  @ApiProperty()
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => GenericAddressInput)
  @IsOptional()
  secondaryAddress?: GenericAddressInput;

  @ApiProperty()
  @Expose()
  @IsISO8601({ strict: true })
  @IsOptional()
  birthDate?: Date;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  mobileNumber?: string;

  @ApiProperty()
  @Expose()
  @IsString()
  @IsOptional()
  photo?: string;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  @IsOptional()
  isConfirmed?: boolean;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  @IsOptional()
  disabled: boolean;
}
