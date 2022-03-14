import { execSync } from 'child_process';

export function newProject(name) {
    console.log('Cloning project...');
    execSync(`git clone https://github.com/juninhocruzg3/VanillaTS.git ${name}`)
    console.log('Cloned.');
    console.log('Setting up...');
    console.log('Done.');
}