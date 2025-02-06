import { z } from 'zod';
import { Tool, Context } from '../sdk';

export const writeToTerminal: Tool<z.ZodObject<{ command: z.ZodString }>> = {
  name: 'write_to_terminal',
  description: 'Write text to the active terminal window',
  parameters: z.object({
    command: z.string()
  }),
  execute: async (params: { command: string }) => {
    // Terminal write implementation
    return 'Command written to terminal';
  }
};

export const readTerminal: Tool<z.ZodObject<{ linesOfOutput: z.ZodNumber }>> = {
  name: 'read_terminal_output',
  description: 'Read output from the active terminal',
  parameters: z.object({
    linesOfOutput: z.number()
  }),
  execute: async (params: { linesOfOutput: number }) => {
    // Terminal read implementation
    return 'Terminal output';
  }
};