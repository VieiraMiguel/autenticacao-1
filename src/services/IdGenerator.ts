import { v4 } from "uuid"

export class IdGenarator {

    public genarate = (): string => {

        return v4()
    }
}