export class F1Driver {
    private _id: number;
    private _name: string;
    private _teamId: number;
    private _age: number;

    constructor(id: number, name: string, teamId: number, age: number) {
        this._id = id;
        this._name = name;
        this._teamId = teamId;
        this._age = age;
    }

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get teamId(): number { return this._teamId; }
    get age(): number { return this._age; }

    set id(id: number) { this._id = id; }
    set name(name: string) { this._name = name; }
    set teamId(teamId: number) { this._teamId = teamId; }
    set age(age: number) { this._age = age; }

    public toString = (): string =>
        `F1 Driver: ${this._name} | Team ID: ${this._teamId} | Age: ${this._age}`;
}
