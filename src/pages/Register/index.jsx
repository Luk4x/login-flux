import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { PStyled } from '../../components/Form/styles';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/AuthContext';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { erros }
    } = useForm();
    const { firebaseSignUp } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleSignUp(formData) {
        console.log(formData);

        try {
            setLoading(true);
            await firebaseSignUp(formData.email, formData.password);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    }

    return (
        <Form SubmitFunction={handleSubmit(handleSignUp)} formName="Registro">
            <Input
                name="Email"
                id="email"
                registerData={register('email', { required: true })}
                type="text"
            />
            <Input
                name="Senha"
                id="password"
                registerData={register('password', { required: true })}
                type="password"
            />
            <Input
                name="Confirmar Senha"
                id="passwordConfirmation"
                registerData={register('passwordConfirmation', { required: true })}
                type="password"
            />
            <Button title="Registrar" type="submit" disabled={loading} />
            <PStyled>
                Já tem uma conta? Faça <a href="#">LogIn</a>.
            </PStyled>
        </Form>
    );
}
