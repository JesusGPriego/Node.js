import { TableCreator } from '@/domain/use-case/createTable.useCase';
import { FileSaver } from '@/domain/use-case/saveFile.useCase';

type RunOptions = {
    base: number;
    limit: number;
    printTable: boolean;
    destination: string;
    name: string;
};

export class ServerApp {
    static run(options: RunOptions) {
        const { base, limit, printTable, destination, name } = options;
        console.log('Server is running...');
        console.log('options received: \n', options);
        const tableCreator = new TableCreator();
        const table = tableCreator.execute({ base, limit });
        if (printTable) console.log(table);
        const isSaved = new FileSaver().execute({
            data: table,
            fileName: `${name}-${base}`,
            destination,
        });
        isSaved
            ? console.log('File created')
            : console.log('There was a problem saving the file');
    }
}
