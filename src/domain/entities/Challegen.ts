import { Entity } from "../../core/domain/Entity";

export type ChallegenProps = {
    title: string;
    instructionUrl: string;
}
export class Challegen extends Entity<ChallegenProps> {
    private constructor(props: ChallegenProps, id?: string) {
        super(props, id);
    }

    static create(props: ChallegenProps, id?: string): Challegen {
        const challegen = new Challegen(props, id);

        return challegen;
    }

}