import { ContextProvider } from './Context';

const AppProviders: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ContextProvider>
        {children}
    </ContextProvider>
  );
};

export default AppProviders;
