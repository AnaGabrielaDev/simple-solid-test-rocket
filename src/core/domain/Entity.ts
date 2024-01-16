import {v4 as UUID} from "uuid"
export abstract class Entity<T> {
    public readonly props: T
    protected _id: string

    constructor(props: T, id?: string) {
        this._id = id ?? UUID.toString()
        this.props = props
    }
}