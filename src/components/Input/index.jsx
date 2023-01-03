import { InputContainerStyled, LabelStyled, InputStyled } from './styles';

export default function Input({ name, id }) {
    return (
        <InputContainerStyled>
            <InputStyled type="text" placeholder={name} id={id} />
            <LabelStyled for={id}>{name}</LabelStyled>
        </InputContainerStyled>
    );
}
