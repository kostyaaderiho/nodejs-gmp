export const entityNotFound = (id: string): string => {
    return `The entity with ${id} id was not found.`;
};

export const entityDeleted = (id: string, softly: boolean = true): string => {
    return `The entity with ${id} id has beed ${
        softly ? 'softly' : ''
    } deleted.`;
};

export const entityQueryParamNotProvided = (): string => {
    return 'The entity required query params are not provided';
};
