import { KEY_NAME } from '../../Consts';
import { IUser } from '../../types/user.type';

import { professionsObject as professions } from './professions.api';

const qualities = {
    tedious: {
        _id: '67rdca3eeb7f6fgeed471198',
        name: 'Нудила',
        color: 'primary'
    },
    strange: {
        _id: '67rdca3eeb7f6fgeed471100',
        name: 'Странный',
        color: 'secondary'
    },
    buller: {
        _id: '67rdca3eeb7f6fgeed4711012',
        name: 'Троль',
        color: 'success'
    },
    alcoholic: {
        _id: '67rdca3eeb7f6fgeed471101',
        name: 'Алкоголик',
        color: 'danger'
    },
    handsome: {
        _id: '67rdca3eeb7f6fgeed471102',
        name: 'Красавчик',
        color: 'info'
    },
    uncertain: {
        _id: '67rdca3eeb7f6fgeed471103',
        name: 'Неуверенный',
        color: 'dark'
    }
};

const users = [
    {
        _id: '67rdca3eeb7f6fgeed471815',
        name: 'Джон Дориан',
        email: 'Jony7351@tw.com',
        sex: 'male',
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471816',
        name: 'Кокс',
        email: 'white4571@twipet.com',
        sex: 'male',
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471817',
        name: 'Боб Келсо',
        email: 'bob007@tw.com',
        sex: 'male',
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471818',
        name: 'Рэйчел Грин',
        email: 'green7311@fam.biz',
        sex: 'female',
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471819',
        name: 'Шелдон Купер',
        email: 'mindgames6878@phis.tech',
        sex: 'male',
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471820',
        name: 'Леонард Хофстедтер',
        email: 'mindes000@phis.tech',
        sex: 'male',
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471821',
        name: 'Говард Воловиц',
        email: 'gov1903@phis.tech',
        sex: 'male',
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471822',
        name: 'Никола Тесла',
        email: 'electro@underground.tech',
        sex: 'male',
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471823',
        name: 'Моника Геллер',
        email: 'mono@super.com',
        sex: 'female',
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471824',
        name: 'Рататуй',
        email: 'ratatatata@underground.com',
        sex: 'male',
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed47181f',
        name: 'Джоуи Триббиани',
        email: 'joe@trib.com',
        sex: 'male',
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed47181r',
        name: 'Брэд Питт',
        email: 'superstar@star.com',
        sex: 'male',
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed4712181r',
        name: 'Жора Рыбак',
        email: 'cannibalr@corpse.com',
        sex: 'male',
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 485,
        rate: 5,
        bookmark: false
    },
    {
        _id: '67rd11ca3eeb7f6fgeed4712181r',
        name: 'Фанфурье',
        email: 'triple@parfum.com',
        sex: 'male',
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 12,
        rate: 2.1,
        bookmark: false
    },
    {
        _id: '6geed4712181r',
        name: 'Fuhrer',
        email: 'fuhrer@yandex.com',
        sex: 'male',
        profession: professions.waiter,
        qualities: [qualities.uncertain, qualities.strange, qualities.buller],
        completedMeetings: 122,
        rate: 2.1,
        bookmark: false
    },
    {
        _id: '6gee11d4dgdf7121811r',
        name: 'Mur Mur Mur',
        email: 'cat@whiskas.com',
        sex: 'female',
        profession: professions.waiter,
        qualities: [qualities.buller],
        completedMeetings: 2,
        rate: 4.1,
        bookmark: true
    },
    {
        _id: '6gee11d47121811r',
        name: 'Skvartilnik',
        email: 'dog@pes.com',
        sex: 'male',
        profession: professions.waiter,
        qualities: [qualities.buller],
        completedMeetings: 20,
        rate: 4.7,
        bookmark: true
    }
];

if (!localStorage.getItem(KEY_NAME)) {
    localStorage.setItem(KEY_NAME, JSON.stringify(users));
}

const fetchAll = async (): Promise<unknown> =>
    await new Promise((resolve) => {
        const localStorageUsers = localStorage.getItem(KEY_NAME);
        if (localStorageUsers) {
            resolve(JSON.parse(localStorageUsers));
        }
    });

const update = async (id: string, data: IUser): Promise<unknown> =>
    await new Promise((resolve) => {
        const localStorageUsers = localStorage.getItem(KEY_NAME);
        if (localStorageUsers) {
            const usersData = JSON.parse(localStorageUsers);
            const userIndex = usersData.findIndex((u: IUser) => u._id === id);
            usersData[userIndex] = { ...usersData[userIndex], ...data };
            localStorage.setItem(KEY_NAME, JSON.stringify(usersData));
            resolve(usersData[userIndex]);
        }
    });

const getById = async (id: string): Promise<unknown> =>
    await new Promise((resolve) => {
        const localStorageUsers = localStorage.getItem(KEY_NAME);
        if (localStorageUsers) {
            const usersData = JSON.parse(localStorageUsers);
            window.setTimeout(function () {
                resolve(usersData.find((u: IUser) => u._id === id));
            }, 500);
        };
    });

export default {
    fetchAll,
    getById,
    update
};
