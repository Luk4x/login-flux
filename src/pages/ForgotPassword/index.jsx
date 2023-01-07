import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import MyToast from '../../components/MyToast';
import { PStyled } from '../../components/Form/styles';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ForgotPasswordSchema = yup
    .object({
        email: yup
            .string()
            .required('Todos os campos são obrigatórios!')
            .email('Digite um email válido!')
    })
    .required('Todos os campos são obrigatórios!');

export default function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(ForgotPasswordSchema)
    });
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleResetPassword({ email }) {
        setLoading(true);

        try {
            await resetPassword(email);

            MyToast(
                'success',
                'Instruções foram enviadas no email!\nLembre-se de checar o spam!',
                '#61dafb',
                3400
            );
        } catch (err) {
            console.error(err);

            const errMessage =
                err.code === 'auth/user-not-found'
                    ? 'Esse email não está cadastrado!'
                    : 'Falha ao redefinir senha!';
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
        <Form submitFunction={handleSubmit(handleResetPassword)} formName="Senha">
            <Input name="Email" id="email" registerData={register('email')} type="text" />
            <Button title="Redefinir" type="submit" disabled={loading} />
            <PStyled>
                Faça <Link to="/login">LogIn</Link>.
            </PStyled>
        </Form>
    );
}
