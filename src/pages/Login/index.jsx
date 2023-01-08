import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import MyToast from '../../components/MyToast';
import { PStyled } from '../../components/Form/styles';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup
    .object({
        email: yup
            .string()
            .required('Todos os campos são obrigatórios!')
            .email('Digite um email válido!'),
        password: yup
            .string()
            .required('Todos os campos são obrigatórios!')
            .min(6, 'A senha deve ter pelo menos 6 caracteres!')
    })
    .required('Todos os campos são obrigatórios!');

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const { logIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLogIn({ email, password }) {
        setLoading(true);

        try {
            await logIn(email, password);

            MyToast('success', 'LogIn realizado com sucesso!', '#61dafb');

            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            console.error(err);

            let errMessage = '';
            switch (err.code) {
                case 'auth/wrong-password':
                    errMessage = 'Senha incorreta!';
                    break;

                case 'auth/user-not-found':
                    errMessage = 'Esse email não está cadastrado!';
                    break;

                default:
                    errMessage = 'Falha ao realizar o LogIn!';
                    break;
            }
            MyToast('error', errMessage, '#a00000');
        } finally {
            setLoading(false);
            return;
        }
    }

    useEffect(() => {
        const errMessage = Object.entries(errors)[0]?.[1]?.message;
        if (errMessage) MyToast('error', errMessage, '#a00000');
    }, [errors]);

    return (
        <Form submitFunction={handleSubmit(handleLogIn)} formName="LogIn">
            <PStyled top>
                <Link to="/forgot-password">Esqueceu a senha?</Link>
            </PStyled>
            <Input name="Email" id="email" registerData={register('email')} type="text" />
            <Input
                name="Senha"
                id="password"
                registerData={register('password')}
                type="password"
            />
            <Button title="LogIn" type="submit" disabled={loading} />
            <PStyled>
                Precisa de uma conta? <Link to="/register">Registre-se</Link>.
            </PStyled>
        </Form>
    );
}
