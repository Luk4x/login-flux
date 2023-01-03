import { ButtonStyled } from './styles';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Button({ title }) {
    return (
        <ButtonStyled type="submit">
            {title}
            <MdOutlineArrowForwardIos />
        </ButtonStyled>
    );
}
