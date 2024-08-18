function createHeader(base: number): string {
    return `
================================
        Tabla del ${base}
================================`;
}

function createBody(base: number, limit: number): string {
    let body: string = '\n';
    for (let i = 1; i < limit; i++) {
        body += `${base} * ${i} = ${base * i}\n`;
    }
    return body;
}

export function cerateTable(base: number, limit: number): string {
    const message = `${createHeader(base)} \n ${createBody(base, limit)}`;
    return message;
}
