// backend/models/Team.ts

export class Team {
    constructor(
        private _id: number,
        private _name: string,
        private _country: string
    ) {}

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get country(): string {
        return this._country;
    }

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set country(country: string) {
        this._country = country;
    }
}
