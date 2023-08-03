import { AbstractEntity } from '../../database/abstract.entity';
import { Entity } from 'typeorm';

@Entity('TestModel')
export class TestModel extends AbstractEntity<TestModel> {}
