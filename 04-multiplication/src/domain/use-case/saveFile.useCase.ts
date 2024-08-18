import { outputPath } from "@/constants/constants";
import { saveFile } from "@/utils/writeFile";

type SaveFileOptions = {
    data: string;
    destination: string;
    fileName: string;
}

interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export class FileSaver implements SaveFileUseCase{
    constructor() {

    }
    execute(options: SaveFileOptions) {
        const {
            data,
            destination,
            fileName
        } = options;

        return saveFile(destination, fileName, data);
    }
}