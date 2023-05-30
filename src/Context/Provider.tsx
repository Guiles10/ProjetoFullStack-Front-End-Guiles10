import { AuthProvider } from "./AuthContext";
import { ContactsProvider } from "./ContactContext";
import { UserProvider } from "./UserContext";


interface iAuthProviderChildren {
    children: React.ReactNode;
}
export const Provider = ({ children }: iAuthProviderChildren) => (
    
    <AuthProvider>
        <UserProvider>
            <ContactsProvider>
                {children}
            </ContactsProvider>
        </UserProvider>
    </AuthProvider>
)