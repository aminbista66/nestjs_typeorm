export class CreateUserDto {
    username: string;
    password: string;
    confirm_password: string;
    firstName?: string;
    lastName?: string;
}