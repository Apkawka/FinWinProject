import React, {FC, useEffect, useState} from "react";
import {
    Container,
    Grid,
    Stack,
} from "@mui/material";
import './static/style/index.css'
import axios from "axios";
import {useNavigate} from "react-router";

const Home: FC = () => {

    const [users, setUsers] = useState<[{
        name: string,
        phone: string,
        uid: string,
        usersForTransfers: any
    }] | undefined>()

    const [user, setUser] = useState<{name: string, phone: string, uid: string, usersForTransfers: any} | undefined>()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/list-users',
        })
            .then(function (response) {
                //@ts-ignore
                setUsers(response.data.users)
                console.log(response.data.users)
            });
    }, [])

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Container>
                <Grid container={true}>
                    <Grid item={true} xs={12} sm={12} md={12} lg={12} xl={12} p={7}>
                        <Stack
                            direction={'column'}
                            spacing={2}
                        >
                            <span style={{
                                padding: 0,
                                margin: 0,
                                fontSize: '22px',
                                fontFamily: 'NeueHaasUnicaMedium'
                            }}>Введите <br/>номер телефона</span>
                            <span style={{fontSize: '12px', color: '#808080'}}>Чтобы войти или стать клиентом <br/>Тинькофф</span>
                            <Stack
                                direction={'row'}
                            >
                                <span style={{fontSize: '16px', paddingTop: '1px'}}>+7</span>
                                <label className="custom-select" style={{width: '100%'}}>
                                    <select
                                        style={{width: '100%'}}
                                        onClick={(e) => {


                                            users?.find((opt) => {
                                                //@ts-ignore
                                                if (opt.uid === e.target.value) {
                                                    setUser(opt)
                                                }
                                            })


                                        }}
                                    >
                                        {
                                            users !== undefined &&
                                            users?.map((o, i) => {
                                                return (
                                                    <option value={o.uid} key={i}>{o.phone.slice(1)}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </label>
                            </Stack>
                            <button
                                className={'button-next'}
                                onClick={() => navigate('/payments', {state: user})}
                            >
                                Продолжить
                            </button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Home
