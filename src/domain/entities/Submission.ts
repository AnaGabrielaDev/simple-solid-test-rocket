import { Entity } from "../../core/domain/Entity";

export type SubmissionProps = {
    challegenId: string;
    studentId: string;
    createdAt?: Date;
}

export class Submission extends Entity<SubmissionProps> {
    private constructor(props: SubmissionProps, id?: string) {
        super(props, id);
    }

    static create(props: SubmissionProps, id?: string): Submission {
        const submission = new Submission(
            {...props, createdAt: props.createdAt ?? new Date()}, id);

        return submission;
    }

    get challegenId(): string {
        return this.props.challegenId;
    }

    get studentId(): string {
        return this.props.studentId;
    }

    get createdAt(): Date | null {
        return this.props.createdAt ?? null;
    }
}