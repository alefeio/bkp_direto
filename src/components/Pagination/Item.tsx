import { Button } from "@chakra-ui/react";

interface ItemProps {
    page: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void
}

export function Item({ page, onPageChange, isCurrent = false }: ItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="purple"
                disabled
                _disabled={{
                    bg: "purple.500",
                    cursor: "default",
                }}
            >
                {page}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="purple"
            bg="purple.700"
            _hover={{
                bg: "purple.500",
            }}
            onClick={() => onPageChange(page)}
        >
            {page}
        </Button>
    )
}