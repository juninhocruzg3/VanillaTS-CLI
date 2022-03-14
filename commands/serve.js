import { execSync } from 'child_process';
import { info } from 'console';

export function serve() {
    info('Running command:')
    info('\tnpm run dev')
    execSync('npm run dev', {stdio: 'inherit'})
}