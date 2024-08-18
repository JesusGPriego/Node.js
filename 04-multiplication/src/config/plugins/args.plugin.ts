import { argv } from 'process';
import yargs, { alias } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base',
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit',
    })
    .option('p', {
        alias: 'print',
        type: 'boolean',
        default: false,
        description: 'Print multiplication table',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        description: 'File destination',
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        description: 'File name',
    })
    .check((argv, options) => {
        if (argv.b < 1) {
            throw 'Error: base must be greater than 0';
        }
        return true;
    })
    .parseSync();
