import { CreateChallegenSubmissionUseCase } from "../../src/app/useCases/CreateChallegenSubmissionUseCase"
import { InMemoryChallegenRepository, InMemoryStudentsRepository } from "./inMemory"

describe("CreateChallengeSubmissionTestCase", () => {
    const inMemoryChallegenRepository = new InMemoryChallegenRepository()
    const inMemoryStudentsRepository = new InMemoryStudentsRepository()
    const sut = new CreateChallegenSubmissionUseCase(inMemoryStudentsRepository, inMemoryChallegenRepository)

    it("Should create a new ChallegenSubmission", () => {
       const response = sut.execute({
        challegenId: "any_challegen_id",
        studentId: "any_student_id"
       })

       expect(response).toBeTruthy()
    })

    it("Should create a new ChallengeSubmission with all properties", () => {
        const response = sut.execute({
            challegenId: "any_challegen_id",
            studentId: "any_student_id"
        })

        expect(response.challegenId).toBe("any_challegen_id")
        expect(response.studentId).toBe("any_student_id")
    })
})