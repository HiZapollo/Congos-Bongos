import { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const bongos = cart.map((item) => item._id);

            if (bongos.length) {
                const { data } = await addOrder({ variables: { bongos } });
                const productData = data.addOrder.bongos;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

              setTimeout(() => {
                window.location.assign('/');
              }, 3000);
        }

        saveOrder();
    }, [addOrder]);

    return (
        <div className='success-container'>
            <h1>Success!</h1>
            <div>
                <h2>Thank you for your purchase!</h2>
                <h2>You will now be redirected to the home page</h2>
            </div>

        </div>
    );
}

export default Success;
