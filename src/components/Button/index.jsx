import { ButtonStyled } from './styles';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Button({ title, ...rest }) {
    return (
        <ButtonStyled {...rest}>
            <span>{title}</span>
            <MdOutlineArrowForwardIos />
        </ButtonStyled>
    );
}
