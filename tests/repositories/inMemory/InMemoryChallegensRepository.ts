import { ChallegensRepository } from "../../../src/app/repositories/ChallegensRepository";
import { Challegen } from "../../../src/domain/entities/Challegen";

export class InMemoryChallegenRepository implements ChallegensRepository {
    public items: Challegen[] = [];
    async findById(id: string): Promise<Challegen | null> {
    const challegen = this.items.find((challegen => challegen.id === id));
    if(!challegen) return null;

    return challegen
 }
}