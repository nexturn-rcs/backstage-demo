import { createBackend } from '@backstage/backend-defaults';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { createBackendModule } from '@backstage/backend-plugin-api';
import { createNewFileAction } from '/home/ubuntu/backstage/my-backstage-app/packages/backend/src/plugins/actions/myCustomAction';
import { createShellCommandAction } from '/home/ubuntu/backstage/my-backstage-app/packages/backend/src/plugins/actions/runShell';
//import { createScaffolder } from './plugins/scaffolder';
//import { PluginEnvironment } from './plugins/actions/types';

const scaffolderModuleCustomExtensions = createBackendModule({
    pluginId: 'scaffolder', // name of the plugin that the module is targeting
    moduleId: 'custom-extensions',
    register(env) {
      env.registerInit({
        deps: {
          scaffolder: scaffolderActionsExtensionPoint,
          // ... and other dependencies as needed
        },
        async init({ scaffolder /* ..., other dependencies */ }) {
          // Here you have the opportunity to interact with the extension
          // point before the plugin itself gets instantiated
          scaffolder.addActions(createNewFileAction()); // just an example
          scaffolder.addActions(createShellCommandAction());
        },
      });
    },
  });


const backend = createBackend();

backend.add(import('@backstage/plugin-app-backend'));
backend.add(scaffolderModuleCustomExtensions);
backend.add(import('@backstage/plugin-proxy-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(import('@grvpandey11/backstage-plugin-scaffolder-backend-module-ms-teams'));

// Other plugins....
backend.add(import('@backstage/plugin-auth-backend'));
backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'));
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));
backend.add(import('@backstage/plugin-permission-backend'));
backend.add(import('@backstage/plugin-permission-backend-module-allow-all-policy'));
backend.add(import('@backstage/plugin-search-backend'));
backend.add(import('@backstage/plugin-search-backend-module-pg'));
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));
backend.add(import('@backstage/plugin-techdocs-backend'));
backend.add(import('@backstage/plugin-kubernetes-backend'));

//backend.add(
//  createBackendModule({
//    pluginId: 'scaffolder',
//    register(env: PluginEnvironment) {
//      createScaffolder(env).then(router => {
//        env.logger.info('Custom scaffolder router registered');
//        env.router.use(router);
//      });
//    },
//  })
//);

backend.start();
