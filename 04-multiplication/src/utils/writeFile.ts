import fs from "fs";
import { outputPath } from "@/constants/constants";

export const writeFile = (data: string, file: string) => {
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(file, data);
};
