import React from 'react';

import Lottie from 'lottie-react-native';
import confirm from './confirm.json';

import { Container, Title } from './styles';

const CartCompleted: React.FC = () => {
    return (
        <Container>
            <Lottie
                resizeMode="contain"
                autoSize
                source={confirm}
                autoPlay
                loop
                style={{ width: 200 }}
            />

            <Title>Parabénssss, pela compra! {"\n"}
              Estamos preparando seu produto com muito carinho, até logo =)
            </Title>
        </Container>
    );
}

export default CartCompleted;
