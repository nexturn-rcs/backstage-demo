import { createRouter } from '@backstage/plugin-scaffolder-backend';
import { TemplateAction } from '@backstage/plugin-scaffolder-node';
import { Router } from 'express';
import { PluginEnvironment } from './actions/types';
import { shellScriptAction } from './actions/shellScriptAction';
import winston from 'winston';

export async function createScaffolder(env: PluginEnvironment): Promise<Router> {
  const { config, database, catalogClient } = env;

  const actions: TemplateAction<any, any>[] = [shellScriptAction];

  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  });

  const reader = {
    read: async () => Promise.resolve(Buffer.from('')),
    readUrl: async () => Promise.resolve({ buffer: async () => Buffer.from('') }),
    readTree: async () => Promise.reject(new Error('readTree not implemented')),
    search: async () => Promise.reject(new Error('search not implemented')),
  };

  return await createRouter({
    config,
    database,
    catalogClient,
    actions,
    logger,
    reader,
  });
}
