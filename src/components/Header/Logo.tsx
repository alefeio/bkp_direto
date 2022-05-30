import { Image } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
    return (
        <Link href='/dashboard' passHref>
            <Image
                src="/assets/images/logo-direto.png"
                alt="Logomarca da Direto"
                width={["100px", "200%", "180px"]}
                height={["23px", "200%", "41px"]}
                minWidth="100px"
                minHeight="23px"
                cursor="pointer"
            />
        </Link>
    )
}