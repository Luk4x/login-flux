import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { PStyled } from '../../components/Form/styles';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { logIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLogIn(formData) {
        setLoading(true);

        try {
            await logIn(formData.email, formData.password);
            navigate('/');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form submitFunction={handleSubmit(handleLogIn)} formName="LogIn">
            <PStyled top>
                <Link to="/forgot-password">Esqueceu a senha?</Link>
            </PStyled>
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
            <Button title="LogIn" type="submit" disabled={loading} />
            <PStyled>
                Precisa de uma conta? <Link to="/register">Registre-se</Link>.
            </PStyled>
        </Form>
    );
}
