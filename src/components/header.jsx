import React from "react";
import { 
    Header,
    Container,
    Burger,
    Group,
    createStyles,
    Paper, Text,
    Transition
    
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { ToggleButton } from "@mui/material";
import { createTestScheduler } from "jest";

const useStyles = createStyles((theme) => {
    root: {

    }
})


function PageHeader() {
    const [opened, {toggle, close}] = useDisclosure(false)
    const HEIGHT = 70

    return (
        <Header>
            <Container></Container>
        </Header>
    );
}

export default PageHeader;