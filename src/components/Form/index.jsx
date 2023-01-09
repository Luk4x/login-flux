import { FormStyled, FormContainerStyled, LogoAnimation } from './styles';

export default function Form({ children, formName, submitFunction }) {
    return (
        <FormStyled onSubmit={submitFunction}>
            <FormContainerStyled>
                <LogoAnimation />
                <div>
                    <span>Flux</span>
                    <span>{formName}</span>
                </div>
            </FormContainerStyled>
            <div>{children}</div>
        </FormStyled>
    );
}
