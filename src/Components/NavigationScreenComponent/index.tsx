import { StyledScreen } from "./styled"

interface IProps {
    page: string
}

export const NavigationScreenComponent: React.FC<IProps> = ({ page }) => {
    return (
        <StyledScreen>
            {page}
        </StyledScreen>
    )
}