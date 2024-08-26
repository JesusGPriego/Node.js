import { Server } from "@/presentation/server";
import { envs } from "@/config/env";

(() => {
  main2();
})();

function main() {
  Server.start();
}

function main2() {
  const env = envs;
  console.log(env);
}
