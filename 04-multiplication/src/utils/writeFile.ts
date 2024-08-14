import { outputPath } from "@/constants/constants";
import fs from "fs";

export const writeFile = (data: string, file: string) => {
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(file, data);
};
