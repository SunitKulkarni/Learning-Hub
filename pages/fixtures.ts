import fs from 'node:fs';
import path from 'node:path';
import { test as base, expect } from '@playwright/test';
import { ShopAssertions } from './assertions';
import { Shop } from './shop';

type UserRecord = {
  email: string;
  password: string;
  name?: string;
};

type UsersFixture = {
  validUser: UserRecord;
  newUser: UserRecord;
  invalidUsers: UserRecord[];
};

function resolveEnvValue(value: string): string {
  if (!value.startsWith('ENV_')) {
    return value;
  }

  const envKey = value.replace(/^ENV_/, '');
  return process.env[envKey] ?? value;
}

function resolveUser(user: UserRecord): UserRecord {
  return {
    ...user,
    email: resolveEnvValue(user.email),
    password: resolveEnvValue(user.password),
    name: user.name ? resolveEnvValue(user.name) : user.name,
  };
}

const userFilePath = path.resolve(__dirname, '../tests/test_data/user.json');

export const test = base.extend<{
  shop: Shop;
  shopAssertions: ShopAssertions;
  users: UsersFixture;
  loggedInShop: Shop;
}>({
  shop: async ({ page }, use) => {
    await use(new Shop(page));
  },

  shopAssertions: async ({ page }, use) => {
    await use(new ShopAssertions(page));
  },

  // eslint-disable-next-line no-empty-pattern
  users: async ({}, use) => {
    const file = fs.readFileSync(userFilePath, 'utf-8');
    const rawUsers = JSON.parse(file) as UsersFixture;
    const resolvedUsers: UsersFixture = {
      validUser: resolveUser(rawUsers.validUser),
      newUser: resolveUser(rawUsers.newUser),
      invalidUsers: rawUsers.invalidUsers.map(resolveUser),
    };

    await use(resolvedUsers);
  },

  loggedInShop: async ({ page, users }, use) => {
    const shop = new Shop(page);
    await shop.loginPage.open();
    await shop.loginPage.login(users.validUser.email, users.validUser.password);
    await shop.coursesPage.waitForReady();
    await use(shop);
  },
});

export { expect };
