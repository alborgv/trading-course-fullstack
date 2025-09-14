import { useBContext } from '@/context/Context';
import { useEffect } from 'react';

const Checkout: React.FC = () => {

    const { checkoutSession } = useBContext();
    
    useEffect(() => {
        const fetchMerch = async () => {
            checkoutSession()
        }
        fetchMerch();
    }, [checkoutSession]);

    return <div>Redirigiendo a Stripe...</div>;
};

export default Checkout;
