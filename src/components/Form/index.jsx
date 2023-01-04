import { FormStyled, FormContainerStyled } from './styles';
import { SiInfluxdb } from 'react-icons/si';

export default function Form({ children, formName }) {
    return (
        <FormStyled>
            <FormContainerStyled>
                <SiInfluxdb />
                <div>
                    <span>Flux</span>
                    <span>{formName}</span>
                </div>
            </FormContainerStyled>
            <div>{children}</div>
        </FormStyled>
    );
}
