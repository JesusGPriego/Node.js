import { outputPath } from '@/constants/constants';
import { writeFile } from '@/utils/writeFile';
import { cerateTable } from '@/helpers/tableCreator';

type Args = {
    b: number;
    l: number;
    s: boolean;
};

export function main({ b, l, s }: Args) {
    const table = cerateTable(b, l);

    const file = `${outputPath}/tabla-${b}.txt`;
    writeFile(table, file);

    if (s) {
        console.log(table);
    }
}
