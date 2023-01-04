import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';

import { PStyled } from '../../components/Form/styles';

export default function Register() {
    return (
        <Form formName="Registro">
            <Input name="Email" id="email" />
            <Input name="Senha" id="password" />
            <Input name="Confirmar Senha" id="passwordConfirmation" />
            <Button title="Registrar" />
            <PStyled>
                Já tem uma conta? Faça <a href="#">LogIn</a>.
            </PStyled>
        </Form>
    );
}
