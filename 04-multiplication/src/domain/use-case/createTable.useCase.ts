type TableProps = {
    base: number;
    limit: number;
};

interface TableCreatorUseCase {
    execute:  (tableProps: TableProps) => string;
}

export class TableCreator implements TableCreatorUseCase {
    constructor() {}

     execute(tableProps: TableProps) {
        const { base, limit } = tableProps;
        let table: string = `
================================
        Tabla del ${base}
================================\n`;
        for (let i = 1; i < limit; i++) {
            table += `${base} * ${i} = ${base * i}\n`;
        }
        return table;
    }
}
