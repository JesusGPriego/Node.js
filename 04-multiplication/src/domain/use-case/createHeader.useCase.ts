type HeaderProps = {
    title: string;
};

interface HeaderCreatorUseCase {
    execute: ({ title }: HeaderProps) => string;
}

export class HeaderCreator implements HeaderCreatorUseCase {
    execute({ title }: HeaderProps) {
        return `
================================
            ${title}
================================\n`;
    }
}
