export default interface IAuthService {
    login(username: string, password: string): Promise<boolean>
    getMenuTree(): Promise<IMenuTree[]>
}

export interface IMenuTree {
    id: string,
    text: string;
    icon?: string;
    target?: string;
    subNodes?: IMenuTree[];    
}