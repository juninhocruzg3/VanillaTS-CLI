import { Chalk } from 'chalk';

const chalk = new Chalk();
const ascIIArt = [
    ('__     __          _ _ _      _____ ____     ____ _     ___ '),
    ('\\ \\   / /_ _ _ __ (_) | | __ |_   _/ ___|   / ___| |   |_ _|'),
    (' \\ \\ / / _` | \'_ \\| | | |/ _` || | \\___ \\  | |   | |    | | '),
    ('  \\ V / (_| | | | | | | | (_| || |  ___) | | |___| |___ | | '),
    ('   \\_/ \\__,_|_| |_|_|_|_|\\__,_||_| |____/   \\____|_____|___|'),
]

export function version() {
    console.info();
    console.info(chalk.hex('#9e5ef7').bold('Welcome to'))
    for (const row of ascIIArt) {
        console.info(
            chalk.hex('#006aff').bold(row)
        );
    }
    console.info();
    console.info('VanillaTS CLI: v0.0.1');
    console.info('Node: v?.?.?');
    console.info('Package Manager: npm v?.?.?');
    console.info('OS: ??? x??');
    console.info();
    console.info('VanillaTS: v?.?.? | undefined');
    console.info();
    console.info(chalk.bold('Packages'));
    console.info('@acruzjr/vanilla-ts: v?.?.?');
    console.info('typescript: v?.?.?');
    console.info();
    console.info('Please consider', chalk.hex('#006aff').bold('supporting our work'), '.')
}