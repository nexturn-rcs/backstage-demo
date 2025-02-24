import { createTemplateAction, executeShellCommand } from '@backstage/plugin-scaffolder-node';

export const shellScriptAction = createTemplateAction<{ script: string }>({
  id: 'custom:shell-script',
  description: 'Runs a custom shell script',
  schema: {
    input: {
      type: 'object',
      required: ['script'],
      properties: {
        script: {
          type: 'string',
          description: 'The shell script to run',
        },
      },
    },
  },

  async handler(ctx) {
    const { script } = ctx.input;

    ctx.logger.info(`Executing script: ${script}`);

    try {
      await executeShellCommand({
        command: script,
        args: [],
        logStream: ctx.logStream,
        options: {
          cwd: ctx.workspacePath,
        },
      });

      ctx.logger.info('Script executed successfully');
    } catch (error: any) {
      ctx.logger.error(`Error executing script: ${error.message}`);
      throw new Error(`Shell script failed: ${error.message}`);
    }
  },
});


