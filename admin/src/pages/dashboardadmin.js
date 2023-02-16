import Head from "next/head";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Icon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styles from '@/styles/Home.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import { useRouter } from 'next/router';
import { useState } from 'react'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { minWidth } from "@mui/system";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },

    },
};
const labels = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'novembre', 'décembre'];
const drawerWidth = 240;
const data = {
    labels,
    datasets: [
        {
            label: 'messages par mois',
            data: 0,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(

    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const router = useRouter();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [usercount, setUsercount] = React.useState()
    const [roomcount, setRoomcount] = React.useState()
    // const [token, setToken] = React.useState()
    // React.useEffect(() => {
    //     setToken(window.localStorage.getItem('token'))
    // }, [])

    React.useEffect(() => {
        const token = window.localStorage.getItem('token');

        const userNumber = async () => {
            fetch('http://10.10.28.53:8888/users/', {
                headers: {
                    'authorization': token
                }
            })
                .then(response => response.json())
                .then(data => {

                    setUsercount(data.data.length)
                })
        }

        userNumber()

        // const roomNumber = async () => {
        //     fetch('http://10.10.28.53:8888/rooms', {
        //         headers: {
        //             'authorization': token
        //         }

        //     })
        //         .then(response => response.json())
        //         .then(data => {

        //             setRoomcount(data.data.length)
        //         })
        // }
        // roomNumber()
        // const bestSport = fetch('', {

        // })
        // const bestEquipe = fetch('', {

        // })
        // const bymonth = async () => {
        //     fetch('http://10.10.28.53:8888/messages/bymonth', {
        //         headers: {
        //             'authorization': token
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)


        //     })
        // }

        // bymonth()
    }, [])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleButton = (e) => {
        console.log(e.target.innerText)

        if (e.target.innerText == "Utilisateurs") {
            router.push('/user');
        }
        else if (e.target.innerText == "Messages") {
            router.push('/messages');
        }
        else if (e.target.innerText == "Groupes") {
            router.push('/groupes');
        }
        else if (e.target.innerText == "Stats") {
            router.push('/dashboardadmin');
        }
        else {
            router.push('/dashboardadmin');
        }
    }
    return (
        <>    <Head>
            <title>Dashborad</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dasboard admin
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Stats', 'Utilisateurs', 'Messages', 'Groupes'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={handleButton}>
                                    <ListItemIcon>
                                        {index == 0 ? <BarChartTwoToneIcon /> : index == 1 ? <GroupTwoToneIcon /> : index == 2 ? <MailIcon /> : index == 3 ? <Groups2TwoToneIcon /> : null}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Deconnexion'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={handleButton}>
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <DrawerHeader />
                <Main open={open} className={styles.main}>


                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={12}
                    >
                        <Card sx={{ minWidth: 350 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {usercount}
                                </Typography>
                                <Typography variant="body2">
                                    utilisateurs Inscrits
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {roomcount}
                                </Typography>
                                <Typography variant="body2">
                                    Rooms créées
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {roomcount}
                                </Typography>
                                <Typography variant="body2">
                                    Sport favori
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                    <Stack sx={{ minWidth: 1000 }}>
                        <Bar options={options} data={data} />;
                    </Stack>
                </Main>
            </Box>
        </>

    );
}
