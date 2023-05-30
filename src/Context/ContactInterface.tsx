interface iAuthProviderChildren {
    children: React.ReactNode;
}

interface iAddContact {
    name: string;
    email: string;
    telefone: string;
}

interface iEditContact {
    name?: string;
    email?: string;
    telefone?: string;
}

interface icontacts {
    createdAt: string;
    email: string;
    id: string;
    name: string;
    telefone: string;
    userId: string;
}

interface iobj {
    name: string;
    id: string;
    telefone: string;
    email: string;
}

interface iProviderValue { 
    Contacts: icontacts[] | null;
    ModalContact: Boolean;
    setModalContact: React.Dispatch<React.SetStateAction<Boolean>>;
    NewCard: (infoCard: any) => Promise<void>;
    ExcluirContact: (id: string) => Promise<void>;
    EditModalContact: Boolean;
    setEditModalContact: React.Dispatch<React.SetStateAction<Boolean>>;
    EditContact: (infoCard: iEditContact, id: string) => Promise<void>;
    OpenModel: (id: string, name: string, telefone: string, email: string) => void;
    infoModal: iobj | null;
}
