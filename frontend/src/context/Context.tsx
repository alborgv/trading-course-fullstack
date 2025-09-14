import React, { createContext, useContext } from "react";

const Context = createContext<ContextType | undefined>(undefined);

export const useBContext = (): ContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useBContext debe usarse dentro de un ContextProvider");
    }

    return context;
}

export const ContextProvider: React.FC<ChildrenProps> = ({ children }) => {
    const urlBackend = import.meta.env.VITE_URL_BACKEND;

    const sendContact = async (formData: ContactFormProps) => {
        try {

            const response = await fetch(`${urlBackend}/api/send_contact/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error("Error al enviar datos")
            }

            return { success: true, formData};
        } catch (error) {
            console.error("error:", error);
            return { success: false, error };
        }
    }
    
    const checkoutSession = async () => {
        const response = await fetch(`${urlBackend}/api/create-checkout-session/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
        
        if (!response.ok) {
            const text = await response.text();
            console.error("Respuesta inesperada:", text);
            return;
        }

        const data = await response.json();
        
        if (data.url) {
            window.location.href = data.url;
        } else {
            console.error("No se encontró la URL de checkout.");
        }
    }

    return (
        <Context.Provider
            value={{
                sendContact,
                checkoutSession
            }}
        >
            {children}
        </Context.Provider>
    );
};
