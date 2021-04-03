import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const owner = this.ownersRepository.create(createOwnerInput);

    return this.ownersRepository.save(owner);
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) {
    return this.ownersRepository.findOneOrFail(id);
  }

  async update(id: number, { name }: UpdateOwnerInput) {
    await this.ownersRepository.update({ id }, { name });
    return this.ownersRepository.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
