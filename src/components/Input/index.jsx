import { InputContainerStyled, LabelStyled, InputStyled } from './styles';

export default function Input({ name, id, registerData, ...rest }) {
    return (
        <InputContainerStyled>
            <InputStyled placeholder={name} id={id} {...registerData} {...rest} />
            <LabelStyled htmlFor={id}>{name}</LabelStyled>
        </InputContainerStyled>
    );
}
