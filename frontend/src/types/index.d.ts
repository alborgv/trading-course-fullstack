import { ReactNode } from "react";

export { };

declare global {

    interface ChildrenProps {
        children: ReactNode;
    }
    
    interface ContactFormProps {
        name: string;
        email: string;
        message: string;
    }
    
    interface ContextType {
        sendContact: (formData: ContactFormProps) => Promise<any>;
        checkoutSession: () => Promise<any>;
    }
}