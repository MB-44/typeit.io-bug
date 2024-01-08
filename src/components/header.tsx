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
    const { classes, cx } = useStyles();
    const router = useRouter();

    return (
        <Header height={70} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing="xl">
                    <Text className={classes.title}>
                        typeIt.io
                    </Text>
                    <div className={classes.burger}>
                        <div className={classes.hide}>
                            {/* color scheme toggle and burger */}
                        </div>
                    </div>
                </Group>

                <Group spacing={5} className={classes.links}>
                    <Link href="/">
                        <a
                          key="Home"  
                          className={cx(classes.links, router.pathname == "/" ? classes.linkActive: '')}  
                          onClick={(e) => {
                            close();
                          }}>
                            Home
                          </a>
                    </Link>
                    
                    <Link href="/dashboard">
                        <a
                          key="Dashboard"  
                          className={cx(classes.links, router.pathname == "/dashboard" ? classes.linkActive: '')}  
                          onClick={(e) => {
                            close();
                          }}>
                            Dashboard
                          </a>
                    </Link>
                    
                    <Link href="/user">
                        <a
                          key="User"  
                          className={cx(classes.links, router.pathname == "/user" ? classes.linkActive: '')}  
                          onClick={(e) => {
                            close();
                          }}>
                            Profile
                          </a>
                    </Link>
                </Group>
                
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                    aria-label={ToggleButton}
                    />

                <Transition transition={'pop-top-right'} duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            <Link href="/">
                                <a
                                  key="Home"  
                                  className={cx(classes.links, router.pathname == "/" ? classes.linkActive: '')}  
                                  onClick={(e) => {
                                    close();
                                  }}>
                                    Home
                                  </a>
                            </Link>
                    
                            <Link href="/dashboard">
                                <a
                                  key="Dashboard"  
                                  className={cx(classes.links, router.pathname == "/dashboard" ? classes.linkActive: '')}  
                                  onClick={(e) => {
                                    close();
                                  }}>
                                    Dashboard
                                  </a>
                            </Link>
                    
                            <Link href="/user">
                                <a
                                  key="User"  
                                  className={cx(classes.links, router.pathname == "/user" ? classes.linkActive: '')}  
                                  onClick={(e) => {
                                    close();
                                  }}>
                                    Profile
                                  </a>
                            </Link>
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    );
}

export default PageHeader;