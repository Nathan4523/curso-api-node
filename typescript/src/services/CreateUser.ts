/**
 * Para criar: name, email, password
 */

interface TechObject {
    title: string;
    experience: number
}

interface CreateUserDate {
    name?: string;
    email: string;
    password: string,
    techs: Array<string | TechObject>
}

/**
 * 
 * @param name
 * Se o param name vier como undefined, a propria variavel use que recebe name, não irá ser atribuido nada, ou seja, inexistente
 */
export default function createUser({ name, email, password }: CreateUserDate) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}