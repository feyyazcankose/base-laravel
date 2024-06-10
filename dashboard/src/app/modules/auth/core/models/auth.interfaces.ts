export interface ILoginRequest {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface ILoginResponse {
    accessToken: string;
    user: ICurrentUser;
}

export interface ICurrentUser {
    created_at: string;
    email: string;
    name: string;
    id: number;
}

export type ILogoutOptions = {
    alert?: boolean;
};
