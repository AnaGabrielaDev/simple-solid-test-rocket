import { Submission } from "../../domain/entities/Submission";
import { ChallegensRepository } from "../repositories/ChallegensRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallegenSubmissionUseCaseRequestDTO = {
    studentId: string;
    challegenId: string;
}
export class CreateChallegenSubmissionUseCase {
    constructor(
        private readonly studentsRepository: StudentsRepository,
        private readonly challegensRepository: ChallegensRepository
    ) {}

    execute({challegenId, studentId}: CreateChallegenSubmissionUseCaseRequestDTO) {
        const studentAlreadyExists = this.studentsRepository.findById(studentId);
        if(!studentAlreadyExists) throw new Error("Student not found");

        const challegenAlreadyExists = this.challegensRepository.findById(challegenId);
        if(!challegenAlreadyExists) throw new Error("Challegen not found");

        const submission = Submission.create({
            challegenId,
            studentId
        })

        return submission;
    }
}