import Knex from 'knex';
import { User } from './interface';

const knex = Knex({
  client: 'sqlite3',
  connection: ':memory:',
  useNullAsDefault: true
});

knex.schema
  .createTable('users', (table) => {
    table.string('username').notNullable().unique();
    table.string('displayed_name').notNullable();
    table.string('hashed_password').notNullable();
  })
  .catch((err) => {
    console.log(err);
  });

const newUser = (username: string, displayedName: string, hashedPassword: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    knex('users')
      .insert<User>({
        username,
        displayed_name: displayedName,
        hashed_password: hashedPassword
      })
      .then(() => resolve())
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

const getAllUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    knex('users')
      .select('*')
      .then((data) => resolve(data))
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};

export { newUser, getAllUsers };
