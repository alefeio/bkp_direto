import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    const { user } = useContext(UserContext);

    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>{user?.name}</Text>
                    <Text color="gray.800" fontSize="small">
                        {user?.email}
                    </Text>
                </Box>
            )}

            <Avatar size="md" name={user?.name} bg="purple.100" />
        </Flex>
    )
}