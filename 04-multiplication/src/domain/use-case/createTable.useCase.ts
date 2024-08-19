type TableProps = {
    base: number;
    limit: number;
};

interface TableCreatorUseCase {
    execute: (tableProps: TableProps) => string;
}

export class TableCreator implements TableCreatorUseCase {
    constructor() {}

    execute({ base, limit = 10 }: TableProps) {
        let table: string = '';
        for (let i = 1; i < limit; i++) {
            table += `${base} * ${i} = ${base * i}\n`;
        }
        return table;
    }
}
