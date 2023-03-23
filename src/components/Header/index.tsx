import { Container, Logo, Profile } from "./styles";

import LogoImage from '@assets/Logo.png';
import ProfileImage from '@assets/Profile.png';

export function Header() {
    return (
        <Container>
            <Logo source={LogoImage} />
            <Profile source={ProfileImage} />
        </Container>
    );
}