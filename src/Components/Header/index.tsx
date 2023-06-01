import { Link } from 'react-router-dom'
import { StyledSecHeader } from './styled'

export const Header = () => {

    const LimpaLS = () => {
        window.localStorage.clear()
    }

    return(
        <StyledSecHeader>
            <div className="divHeader">
                <h1><small>Acc</small>Organized</h1>
                <Link replace to="/Login" onClick={() => LimpaLS()}>Sair</Link>
            </div>
        </StyledSecHeader>
    )
}
