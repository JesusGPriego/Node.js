import { Server } from "@/presentation/server";
import { envs } from "@/config/env";

(() => {
  main();
})();

function main() {
  Server.start();
}

function main2() {
  const env = envs;
  console.log(env);
}
