import { Submission } from "../../domain/entities/Submission";

type CreateChallegenSubmissionUseCaseRequestDTO = {
    userId: string;
    challegenId: string;
}
export class CreateChallegenSubmissionUseCase {
    execute({challegenId, userId}: CreateChallegenSubmissionUseCaseRequestDTO) {
        const submission = Submission.create({
            challegenId,
            studentId: userId
        })

        return submission;
    }
}