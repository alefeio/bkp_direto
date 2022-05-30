import { HStack, Icon, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import Router from "next/router";
import {
    RiChat3Line,
    RiNotificationLine,
} from "react-icons/ri";

export function Notifications() {
    return (
        <HStack
            spacing={["6", "8"]}
            mx={["6", "8"]}
            pr={["6", "8"]}
            py="1"
            color="gray.700"
            borderRightWidth={1}
            borderColor="gray.400"
        >;
            <button onClick={() => Router.push("/dashboard")}>
                <Tooltip hasArrow label='Notificações' bg='purple.700'>
                    <ChakraLink>
                        <Icon as={RiNotificationLine} fontSize="20" />
                    </ChakraLink>
                </Tooltip>
            </button>
            <button onClick={() => Router.push("/dashboard")}>
                <Tooltip hasArrow label='Suporte' bg='purple.700'>
                    <ChakraLink>
                        <Icon as={RiChat3Line} fontSize="20" />
                    </ChakraLink>
                </Tooltip>
            </button>
        </HStack>
    )
}