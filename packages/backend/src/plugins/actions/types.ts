import { LoggerService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import { PluginDatabaseManager } from '@backstage/backend-common';
import { CatalogClient } from '@backstage/catalog-client';
import { IdentityClient } from '@backstage/plugin-auth-node';
import { PluginCacheManager } from '@backstage/backend-common';

export type PluginEnvironment = {
  logger: LoggerService;
  config: Config;
  database: PluginDatabaseManager;
  catalogClient: CatalogClient;
  cache: PluginCacheManager; // ✅ Replacing UrlReader
  identity: IdentityClient;
};
