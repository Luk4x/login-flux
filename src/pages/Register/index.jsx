import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { PStyled } from '../../components/Form/styles';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { signUp } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSignUp(formData) {
        setLoading(true);

        try {
            await signUp(formData.email, formData.password);
            navigate('/');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form submitFunction={handleSubmit(handleSignUp)} formName="SignUp">
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
                Já tem uma conta? Faça <Link to="/login">LogIn</Link>.
            </PStyled>
        </Form>
    );
}
