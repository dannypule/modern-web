import { PipeTransform, Pipe, ArgumentMetadata, HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/core";
import * as Joi from 'joi';

@Pipe()
export class JoiValidatorPipe implements PipeTransform {
    constructor(private readonly schema: Joi.ObjectSchema) {}

    public transform(value, metadata: ArgumentMetadata) {
        const { error } = Joi.validate(value, this.schema);
        if (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
        return value;
    }
}