import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import MyToast from '../../components/MyToast';
import { PStyled } from '../../components/Form/styles';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const updateSchema = yup.object({
    newEmail: yup.string().notRequired().nullable().email('Digite um email válido!'),
    newPassword: yup
        .string()
        .notRequired()
        .nullable()
        .min(6, 'A senha deve ter pelo menos 6 caracteres!'),
    newPasswordConfirmation: yup
        .string()
        .notRequired()
        .nullable()
        .oneOf([yup.ref('newPassword')], 'As senhas devem ser iguais!')
});

export default function UpdateProfile() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleUpdate({ newEmail, newPassword, newPasswordConfirmation }) {
        if (!newEmail && !newPassword && !newPasswordConfirmation) {
            MyToast('error', 'Atualize a senha ou o email!', '#a00000');
            return;
        }

        if (newEmail === currentUser.email) {
            MyToast('error', 'Esse já é o seu email!', '#a00000');
            return;
        }

        updateSchema
            .validate({
                newEmail: newEmail || null,
                newPassword: newPassword || null,
                newPasswordConfirmation: newPasswordConfirmation || null
            })
            .then(({ newEmail, newPassword }) => {
                setLoading(true);

                Promise.all([
                    newEmail && updateEmail(newEmail),
                    newPassword && updatePassword(newPassword)
                ])
                    .then(data => {
                        let sucMessage =
                            data[0] === null
                                ? 'Senha atualizada '
                                : data[1] === null
                                ? 'Email atualizado '
                                : 'Dados atualizados ';

                        MyToast('success', sucMessage + 'com sucesso!', '#61dafb');

                        setTimeout(() => {
                            navigate('/');
                        }, 1000);
                    })
                    .catch(err => {
                        console.error(err);

                        let errMessage = '';
                        switch (err.code) {
                            case 'auth/user-token-expired':
                                errMessage =
                                    'Falha ao atualizar os dados corretamente.\nFaça LogIn novamente e tente atualizar um de cada vez!';
                                break;

                            case 'auth/requires-recent-login':
                                errMessage =
                                    'Essa é uma operação sensível e requer uma nova autenticação.\nFaça LogIn novamente!';
                                break;

                            case 'auth/email-already-in-use':
                                errMessage = 'Esse email já está cadastrado!';
                                break;

                            case 'auth/wrong-password':
                                errMessage = 'Senha incorreta!';
                                break;

                            case 'auth/user-not-found':
                                errMessage = 'Esse email não está cadastrado!';
                                break;

                            default:
                                errMessage = 'Falha ao atualizar os dados!';
                                break;
                        }
                        MyToast('error', errMessage, '#a00000', 4000);
                    })
                    .finally(() => setLoading(false));
            })
            .catch(err => {
                console.error(err);

                const errMessage = err.message
                    ? err.message
                    : 'Falha ao validar os dados!';
                MyToast('error', errMessage, '#a00000');
            });
    }

    return (
        <Form submitFunction={handleSubmit(handleUpdate)} formName="Update">
            <PStyled top>Deixe em branco os campos que não quiser alterar.</PStyled>
            <Input
                name="Novo Email"
                id="newEmail"
                registerData={register('newEmail')}
                type="text"
            />
            <Input
                name="Nova Senha"
                id="newPassword"
                registerData={register('newPassword')}
                type="password"
            />
            <Input
                name="Confirmar Nova Senha"
                id="newPasswordConfirmation"
                registerData={register('newPasswordConfirmation')}
                type="password"
            />
            <Button title="Atualizar" type="submit" disabled={loading} />
            <PStyled>
                <Link to="/">Cancelar</Link>
            </PStyled>
        </Form>
    );
}
