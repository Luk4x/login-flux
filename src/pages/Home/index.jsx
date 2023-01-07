import { MainStyled, HeaderStyled, SectionStyled } from './styles';
import Button from '../../components/Button';

import { AiOutlineUser } from 'react-icons/ai';
import { SiInfluxdb } from 'react-icons/si';

import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function handleLogOut() {
        setLoading(true);

        try {
            await logOut();
            navigate('/login');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <MainStyled>
            <div>
                <SiInfluxdb />
                <span>Home</span>
            </div>
            <HeaderStyled>
                <AiOutlineUser />
                <h2>{currentUser.email}</h2>
            </HeaderStyled>
            <SectionStyled>
                <Button
                    title="Atualizar Perfil"
                    onClick={() => navigate('/update-profile')}
                />
                <Button title="LogOut" onClick={handleLogOut} disabled={loading} />
            </SectionStyled>
        </MainStyled>
    );
}
