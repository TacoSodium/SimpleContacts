export class Contact {
    title: string;
    name: string;
    address: string;
    imgUrl: string;
    deleteButton: Function | null;

    constructor(title: string, name: string, address: string, source: string) {
        this.title = title;
        this.name = name;
        this.address = address;
        this.imgUrl = source;
    }
}
