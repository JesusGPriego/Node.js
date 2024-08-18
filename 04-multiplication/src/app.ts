import { yarg } from '@/config/plugins/args.plugin';
import { ServerApp } from '@/presentation/server-app';

(async () => {
    main();
})();

async function main() {
    console.log(yarg);
    const { b: base, l: limit, p: printTable, d: destination, n: name } = yarg;
    ServerApp.run({ base, limit, printTable, destination, name });
}
