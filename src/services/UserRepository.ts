import {Service} from 'typedi';
import 'reflect-metadata';
import { User } from '../model/User';

@Service()
export default class UserRepository {
  async getUsers(): Promise<User[]> {
    return [{id: '1', username: 'test', password: 'test'}, {id: '3', username: 'testerson', password: 'test'}, {id: '2', username: 'testington', password: 'test'}];
  }
}