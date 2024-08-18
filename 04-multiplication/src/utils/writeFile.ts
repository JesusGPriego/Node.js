import fs from 'fs';
import { outputPath } from '@/constants/constants';

export const saveFile = (
    destination: string,
    file: string,
    data: string
): boolean => {
    try {
        fs.mkdirSync(destination, { recursive: true });
        fs.writeFileSync(`${destination}/${file}.txt`, data);
        return true;
    } catch (error) {
        return false;
    }
};
