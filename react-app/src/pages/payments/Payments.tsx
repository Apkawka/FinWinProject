import React, {FC, useEffect} from "react";
import {Container, Fab, Grid, Paper, Stack, SvgIconTypeMap} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
//@ts-ignore
import phoneImg from './static/images/phone.png'
//@ts-ignore
import searchImage from './static/images/search.png'

import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';

import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import CurrencyRubleTwoToneIcon from '@mui/icons-material/CurrencyRubleTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import BluetoothTwoToneIcon from '@mui/icons-material/BluetoothTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';

import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SignalWifi3BarTwoToneIcon from '@mui/icons-material/SignalWifi3BarTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import DirectionsBusFilledTwoToneIcon from '@mui/icons-material/DirectionsBusFilledTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import TvTwoToneIcon from '@mui/icons-material/TvTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import {useLocation, useNavigate} from "react-router";

const users = ['Себе', 'Никитос', "шаурма вокзал", 'Мама', "Суши"]
const transfer: Array<{
    name: string,
    ico: any
}> = [
    {
        name: 'По номеру карты',
        ico: <CreditCardTwoToneIcon/>,
    },
    {
        name: 'Между счетами',
        ico: <CompareArrowsTwoToneIcon/>,
    },
    {
        name: 'По реквизитам',
        ico: <CurrencyRubleTwoToneIcon/>,
    },
    {
        name: 'По номеру договора',
        ico: <SummarizeTwoToneIcon/>,
    },
    {
        name: 'Переводы рядом',
        ico: <BluetoothTwoToneIcon/>,
    },
    {
        name: 'SWIFT-переводы',
        ico: <PublicTwoToneIcon/>,
    },
]

const payments: Array<{
    name: string,
    ico: any
}> = [
    {
        name: 'Мобильная связь',
        ico: <PhoneIphoneTwoToneIcon/>,
    },
    {
        name: 'ЖКХ',
        ico: <HomeTwoToneIcon/>,
    },
    {
        name: 'Интернет',
        ico: <SignalWifi3BarTwoToneIcon/>,
    },
    {
        name: 'Образование',
        ico: <SchoolTwoToneIcon/>,
    },
    {
        name: 'Транспорт',
        ico: <DirectionsBusFilledTwoToneIcon/>,
    },
    {
        name: 'Домашний телефон',
        ico: <LocalPhoneTwoToneIcon/>,
    },
    {
        name: 'Телевидение',
        ico: <TvTwoToneIcon/>,
    },
    {
        name: 'Электронные кошельки',
        ico: <AccountBalanceWalletTwoToneIcon/>,
    },
]


const action: Array<{
    name: string,
    ico: any
}> = [
    {
        name: 'Снять наличные',
        ico: <PaymentsTwoToneIcon/>
    },
    {
        name: 'Запросить денег',
        ico: <ArrowCircleDownTwoToneIcon/>
    },
]


const Payments: FC = () => {

    const {state} = useLocation();

    const navigate = useNavigate()

    useEffect(() => {
        if (state === null) {
            navigate('/')
        } else {

        }
    }, [])

    return (
        <React.Fragment>
            <Container>
                <Grid container={true}>
                    <Grid item={true} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Stack
                            direction={'column'}
                            spacing={1}
                            mt={2}
                        >
                            <img src={searchImage} alt={'Поиск'}/>
                        </Stack>
                        <h1>Платежи</h1>
                        <span style={{fontFamily: 'NeueHaasUnicaMedium'}}>Избранное</span>
                        <Grid container>
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                <Stack
                                    direction={'column'}
                                    spacing={1}
                                    mt={2}
                                    justifyContent={'center'}
                                    textAlign={'center'}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Fab aria-label="add" style={{
                                        textAlign: 'center',
                                        backgroundColor: '#428BF9',
                                        width: 53,
                                        height: 53
                                    }}>
                                        <DescriptionIcon style={{color: 'white'}}/>
                                    </Fab>
                                    <span style={{fontSize: '14px'}}>Счета на оплату</span>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: '2pt'}}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Stack
                                    direction={'column'}
                                    spacing={1}
                                    mt={2}
                                >
                                    <span>Переводы по телефону</span>
                                    <img src={phoneImg} alt={'phoneImg'}/>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container>
                            {users.map((o, i) => {
                                return (
                                    <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4} xl={2.4} mt={2} sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        webkitAlignItems: 'flex-start',
                                    }}
                                          key={i}
                                    >
                                        <Stack
                                            direction={'column'}
                                            spacing={1}
                                            mt={2}
                                            alignItems={'center'}
                                        >
                                            <Fab
                                                size="medium"
                                                aria-label="add"
                                                sx={{
                                                    textAlign: 'center',
                                                    backgroundColor: '#52565A',
                                                }}
                                                onClick={() => alert('Полученный номер: ')}
                                            >
                                        <span
                                            style={{
                                                fontSize: '18px',
                                                borderColor: 'white'
                                            }}>
                                            {o.slice(0, 1)}
                                        </span>
                                            </Fab>
                                            <span style={{fontSize: '12px'}}>{o}</span>
                                        </Stack>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container={true}>
                    <Grid item={true} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Stack
                            direction={'row'}
                            justifyContent="space-between"
                        >
                            <span style={{fontFamily: 'NeueHaasUnicaMedium'}}>Платежи</span>
                            <span style={{fontFamily: 'NeueHaasUnicaMedium', color: '#428BF9'}}>Еще</span>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Stack
                direction={'row'}
                spacing={2}
                margin={2}
                sx={{
                    overflow: 'auto',
                    overflowY: 'hidden'
                }}
            >
                {transfer.map((o, i) => {
                    return (
                        <Paper
                            key={i}
                            style={{
                                padding: '8px',
                                backgroundColor: '#1C1C1E',
                                borderRadius: '10px',
                                width: 'auto',
                                minWidth: 79,
                                maxWidth: 79,
                                height: 'auto',
                                minHeight: 79,
                                maxHeight: 79,
                            }}
                        >
                            <Stack
                                direction={'column'}
                                spacing={1}
                            >
                                <Fab color="primary" aria-label="add" style={{
                                    textAlign: 'center',
                                    width: '37px',
                                    height: '37px',
                                    backgroundColor: '#428BF9'
                                }}>
                                    {o.ico}
                                </Fab>
                                <span style={{fontSize: '12px'}}>{o.name}</span>
                            </Stack>
                        </Paper>
                    )
                })}
            </Stack>
            <Container>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item={true} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Stack
                            direction={'row'}
                            justifyContent="space-between"
                        >
                            <span style={{fontFamily: 'NeueHaasUnicaMedium'}}>Переводы</span>
                            <span style={{fontFamily: 'NeueHaasUnicaMedium', color: '#428BF9'}}>Еще</span>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Stack
                direction={'row'}
                spacing={2}
                margin={2}
                sx={{
                    overflow: 'auto',
                    overflowY: 'hidden'
                }}
            >
                {payments.map((o, i) => {
                    return (
                        <Paper
                            key={i}
                            style={{
                                padding: '8px',
                                backgroundColor: '#1C1C1E',
                                borderRadius: '10px',
                                width: 'auto',
                                minWidth: 79,
                                maxWidth: 79,
                                height: 'auto',
                                minHeight: 79,
                                maxHeight: 79,
                            }}
                        >
                            <Stack
                                direction={'column'}
                                spacing={1}
                            >
                                <Fab color="primary" aria-label="add" style={{
                                    textAlign: 'center',
                                    width: '37px',
                                    height: '37px',
                                    backgroundColor: '#428BF9'
                                }}>
                                    {o.ico}
                                </Fab>
                                <span style={{fontSize: '12px'}}>{o.name}</span>
                            </Stack>
                        </Paper>
                    )
                })}
            </Stack>
            <Container>
                <Grid container={true}>
                    <Grid item={true} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <span style={{fontFamily: 'NeueHaasUnicaMedium'}}>Действия</span>
                    </Grid>
                </Grid>
            </Container>
            <Stack
                direction={'row'}
                spacing={2}
                margin={2}
                sx={{
                    overflow: 'auto',
                    overflowY: 'hidden',
                    msOverflowStyle: 'none',
                }}
            >
                {action.map((o, i) => {
                    return (
                        <Paper
                            key={i}
                            style={{
                                padding: '8px',
                                backgroundColor: '#1C1C1E',
                                borderRadius: '10px',
                                width: 'auto',
                                minWidth: 79,
                                maxWidth: 79,
                                height: 'auto',
                                minHeight: 79,
                                maxHeight: 79,
                            }}
                        >
                            <Stack
                                direction={'column'}
                                spacing={1}
                                sx={{
                                    width: '78px'
                                }}
                            >
                                <Fab color="primary" aria-label="add" style={{
                                    textAlign: 'center',
                                    width: '37px',
                                    height: '37px',
                                    backgroundColor: '#428BF9'
                                }}>
                                    {o.ico}
                                </Fab>
                                <span style={{fontSize: '12px'}}>{o.name}</span>
                            </Stack>
                        </Paper>
                    )
                })}
            </Stack>
        </React.Fragment>
    )
}

export default Payments;