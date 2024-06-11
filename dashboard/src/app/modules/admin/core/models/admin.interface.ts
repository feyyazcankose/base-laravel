export interface IAdminResponseP {
    account_status: boolean;
    created_at: string;
    email: string;
    first_name: string;
    id: number;
    image?: string;
    last_name: string;
    phone: string;
    phone_code: string;
}

export interface IAdminCreateRequest {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface IAdminUpdateRequest {
    first_name?: string;
    last_name?: string;
    image: string | null;
    email?: string;
    phone?: string;
    phone_code?: string;
    account_status?: boolean;
}

export interface IAdminUpdatePasswordRequest {
    password: string;
    password_confirm: string;
}
