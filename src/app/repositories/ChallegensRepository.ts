import { Challegen } from "../../domain/entities/Challegen";

export interface ChallegensRepository {
    findById(id: string): Promise<Challegen | null>
}