import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserForm } from '../components/ui/UserForm';
import { IUser } from '../types/user.type';
import API from '../api/index';

const UserFormPage = (): JSX.Element => {
    const [userData, setUserData] = useState<IUser>();
    const { userId } = useParams();
    const navigate = useNavigate();
    let formData: IUser | {} = {};

    useEffect(() => {
        API.users.getById(userId as string)
            .then((user) => {
                const adaptedUser = user as IUser;
                delete adaptedUser.bookmark;
                delete adaptedUser.completedMeetings;
                delete adaptedUser.rate;
                // eslint-disable-next-line
                adaptedUser.email ? adaptedUser.email : adaptedUser.email = '';
                setUserData(adaptedUser);
            })
            .catch(error => console.log(error));
    }, []);

    const getFormData = (data: IUser): void => {
        formData = data;
    };

    const updateUser = (): void => {
        const updatedUser = {
            ...userData,
            ...formData
        };
        API.users.update(userId as string, updatedUser as IUser)
            .then(() => {
                navigate(-1);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <h2>Редактировать</h2>
            <UserForm getFormData={getFormData} buttonName='Обновить' saveDataCb={updateUser} state={userData} />
        </>
    );
};

export { UserFormPage };
