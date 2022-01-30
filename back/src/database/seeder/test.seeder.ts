import { EntityManager } from '@mikro-orm/mysql';
import { Seeder } from '@mikro-orm/seeder';
import { Roles } from '../../api/enums/roles.enum.js';
import { UserModel } from '../../api/models/user.model.js';
import { UserRepository } from '../../api/repositories/user.repository.js';
import { UserFactory } from '../factories/user.factory.js';

export class TestSeeder extends Seeder {
  async run (em: EntityManager): Promise<void> {
    const password = await (em.getRepository(UserModel) as UserRepository).hashPassword('admin');
    await new UserFactory(em).createOne({
      email: 'admin@localhost.com',
      password,
      firstName: 'admin',
      lastName: 'localhost',
      role: Roles.ADMIN,
    });
  }
}
