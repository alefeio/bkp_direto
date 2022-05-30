import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { UserContext } from "../../contexts/UserContext";
import { SidebarNav } from "./SidebarNav";
import { ShowMenu } from "./ShowMenu";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const { menuOpen, modifyMenu } = useContext(UserContext);

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.300" p="4">
            <DrawerCloseButton mt="6" color="gray.500" />
            {/* <DrawerHeader fontSize="sm" color="gray.400">MENU</DrawerHeader> */}
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box
      as="aside"
      w={menuOpen ? "15%" : "4%"}
    >
      <Stack spacing="12" align="flex-start">
        <Box>
          {!isDrawerSidebar && <ShowMenu />}
          <SidebarNav />
        </Box>
      </Stack >
    </Box >
  );
}
