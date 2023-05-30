interface iAuthProviderChildren {
    children: React.ReactNode;
}
interface iInfoUser {
    token: string;
    id: string;
} 
interface iDataUseruser {
    id: string;
    token: string
}
export interface iInfoLogin {
    email: string;
	password: string;
}
export interface InfoUser {
    id: number;
    name: string;
    email: string;
    telefone: number;
    createdAt: string;
    contacts: icontacts[]
} 
export interface icontacts {
    id: string
    name: string
    email: string;
	telefone: string;
	createdAt: string;
    userId: string
}

interface iProviderValue { 
    logInto(infoLogin: iInfoLogin): Promise<void>;
    userLogin: iDataUseruser | null;
    loading: boolean;
    autoLogin: boolean
    InfoUser: InfoUser | null;
}
