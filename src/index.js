import { join } from 'path';
import jsonServer from 'json-server';
import c2k from 'koa-connect';
import chalk from 'chalk';

export default {

  name: 'json-server',

  'middleware'() {
    const server = jsonServer.create();
    const mount = this.query.mount || '/api';
    const router = this.query.router || 'json-server.json';

    this.log.info(`load router ${chalk.gray(router)}, mount as ${chalk.magenta(mount)}`);
    server.use(mount, jsonServer.router(join(this.cwd, router)));
    return c2k(server);
  },

};
