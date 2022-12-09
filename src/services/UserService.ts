import {Service} from 'typedi';
import 'reflect-metadata';
import UserRepository from './UserRepository';
import { User } from '../model/User';

@Service()
export default class UserService {
  private userRepo: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepo = userRepository;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepo.getUsers()
  }
}