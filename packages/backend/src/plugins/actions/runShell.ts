import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { exec } from 'child_process';

export const createShellCommandAction = () => {
  return createTemplateAction<{ command: string }>({
    id: 'custom:shell:execute',
    description: 'Executes a shell command provided as input',
    schema: {
      input: {
        required: ['command'],
        type: 'object',
        properties: {
          command: {
            type: 'string',
            title: 'Shell Command',
            description: 'The shell command to execute',
          },
        },
      },
    },
    async handler(ctx) {
      ctx.logger.info(`Executing command: ${ctx.input.command}`);

      exec(ctx.input.command, (error, stdout, stderr) => {
        if (error) {
          ctx.logger.error(`❌ Error: ${error.message}`);
          throw new Error(`Command execution failed: ${error.message}`);
        }
        if (stderr) {
          ctx.logger.warn(`⚠️ Stderr: ${stderr}`);
        }
        ctx.logger.info(`✅ Output: ${stdout.trim()}`);

        // Store command output in scaffolder output
        ctx.output('commandOutput', stdout.trim());
      });
    },
  });
};
