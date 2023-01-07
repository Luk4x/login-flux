import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { PStyled } from '../../components/Form/styles';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleResetPassword({ email }) {
        setLoading(true);

        try {
            await resetPassword(email);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form submitFunction={handleSubmit(handleResetPassword)} formName="Senha">
            <Input
                name="Email"
                id="email"
                registerData={register('email', { required: true })}
                type="text"
            />
            <Button title="Redefinir" type="submit" disabled={loading} />
            <PStyled>
                Faça <Link to="/login">LogIn</Link>.
            </PStyled>
        </Form>
    );
}
