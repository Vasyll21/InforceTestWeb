import { User } from "./user.model";

export interface ShortUrl {
    id: string;
    url: string;
    short: string;
    creationDate: Date;
    user: User
}
