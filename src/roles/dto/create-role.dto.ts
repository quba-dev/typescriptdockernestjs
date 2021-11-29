import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Администратор'})
    readonly value: string;
    @ApiProperty({example: 'Can do everything', description: 'Всемогущий'})
    readonly description: string;
}