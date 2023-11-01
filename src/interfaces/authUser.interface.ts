export interface IAuthUser {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    is_enabled: boolean,
    created_at: string,
    updated_at: string,
    school: IAuthUserSchool,
}

export interface IAuthUserSchool {
    id: string,
    name: string,
    address: string,
    phone: string,
    is_new: boolean,
    onboarding_step: number,
    is_enabled: boolean,
    created_at: string,
    updated_at: string,
}