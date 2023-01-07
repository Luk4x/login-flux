import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { PStyled } from '../../components/Form/styles';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { updateEmail, updatePassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleUpdate({ newEmail, newPassword }) {
        if (!newEmail && !newPassword) {
            // toast
            return;
        }

        setLoading(true);

        Promise.all([
            newEmail && updateEmail(newEmail),
            newPassword && updatePassword(newPassword)
        ])
            .then(() => navigate('/'))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
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
