import { PluginEnvironment } from '/home/ubuntu/backstage/my-backstage-app/packages/backend/src/plugins/actions/types';
import { createRouter } from '@backstage/plugin-scaffolder-backend';
import { createNewFileAction } from './actions/myCustomAction';

export default async function createPlugin(env: PluginEnvironment) {
  return await createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    actions: [createNewFileAction], // Register your custom action here
  });
}