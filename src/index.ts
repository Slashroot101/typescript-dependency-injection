import 'reflect-metadata';
import { Container } from 'typedi';
import UserService from './services/UserService';

(async () => {
  //service locator pattern (just used an example)
  const userService = Container.get(UserService);

  console.log(await userService.getUsers());
})();
