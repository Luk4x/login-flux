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

const registerSchema = yup
    .object({
        email: yup
            .string()
            .required('Todos os campos são obrigatórios!')
            .email('Digite um email válido!'),
        password: yup
            .string()
            .required('Todos os campos são obrigatórios!')
            .min(6, 'A senha deve ter pelo menos 6 caracteres!'),
        passwordConfirmation: yup
            .string()
            .required('Todos os campos são obrigatórios!')
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais!')
    })
    .required('Todos os campos são obrigatórios!');

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const { signUp } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSignUp({ email, password }) {
        setLoading(true);

        try {
            await signUp(email, password);

            MyToast('success', 'Conta criada com sucesso!', '#61dafb');

            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            console.error(err);

            const errMessage =
                err.code === 'auth/email-already-in-use'
                    ? 'Esse email já está cadastrado!'
                    : 'Falha ao criar a conta!';
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
        <Form submitFunction={handleSubmit(handleSignUp)} formName="SignUp">
            <Input name="Email" id="email" registerData={register('email')} type="text" />
            <Input
                name="Senha"
                id="password"
                registerData={register('password')}
                type="password"
            />
            <Input
                name="Confirmar Senha"
                id="passwordConfirmation"
                registerData={register('passwordConfirmation')}
                type="password"
            />
            <Button title="Registrar" type="submit" disabled={loading} />
            <PStyled>
                Já tem uma conta? Faça <Link to="/login">LogIn</Link>.
            </PStyled>
        </Form>
    );
}
