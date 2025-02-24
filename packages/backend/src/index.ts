import { createBackend } from '@backstage/backend-defaults';
//import { createScaffolder } from './plugins/scaffolder';
//import { PluginEnvironment } from './plugins/actions/types';

const backend = createBackend();

backend.add(import('@backstage/plugin-app-backend'));
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
