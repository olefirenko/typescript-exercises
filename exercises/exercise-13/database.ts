type Filter = {
    $eq: string | number,
    $gt: string | number,
    $lt: string | number,
    $in: number[],
    $text: string,
}

type FieldFilter<T> = {[P in keyof T]: Partial<Filter>}

type BooleanSearch<T> = {
    $and: Partial<FieldFilter<T>>[]
    $or: Partial<FieldFilter<T>>[]
}

type TextSearch = {$text: string}

export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: (keyof T)[];

    constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query: Partial<BooleanSearch<T>> | TextSearch | Partial<FieldFilter<T>>): Promise<T[]> {
        return [];
    }
}
