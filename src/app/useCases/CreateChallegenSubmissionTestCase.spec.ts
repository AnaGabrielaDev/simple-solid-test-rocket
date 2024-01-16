import { CreateChallegenSubmissionUseCase } from "./CreateChallegenSubmissionUseCase"

describe("CreateChallengeSubmissionTestCase", () => {
    it("Should create a new ChallegenSubmission", () => {
       const sut = new CreateChallegenSubmissionUseCase()

       const response = sut.execute({
        challegenId: "any_challegen_id",
        userId: "any_user_id"
       })

       expect(response).toBeTruthy()
    })
})