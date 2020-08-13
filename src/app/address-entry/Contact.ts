export class Contact {
    title: string;
    name: string;
    address: string;
    imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Echinocactus_grusonii_1.jpg";

    constructor(title: string, name: string, address: string, source: string) {
        this.title = title;
        this.name = name;
        this.address = address;
        this.imgUrl = source;
    }
}
