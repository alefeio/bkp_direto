
import { Stack, Tooltip, Link as ChakraLink, Icon, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiFileUserLine, RiLogoutBoxLine, RiPantoneLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { signOut } from "next-auth/react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function SidebarNav({ color }: any) {
    const { menuOpen } = useContext(UserContext);

    async function logout() {
        await signOut();
    }

    return (
        <Stack spacing="4" mt="8" align="stretch">
            <NavLink label="Dashboard" url="/dashboard" icon={RiDashboardLine} color={color} />
            <NavLink label="Usuários" url="/users" icon={RiFileUserLine} color={color} />
            <NavLink label="Carteiras" url="/carteiras" icon={RiPantoneLine} color={color} />
            <button onClick={() => logout()}>
                <ChakraLink display="flex" color={color}>
                    <Icon as={RiLogoutBoxLine} fontSize="20" />
                    {menuOpen && <Text ml="4" fontWeight="medium">
                        Sair
                    </Text>}
                </ChakraLink>
            </button>
        </Stack>
    )
}