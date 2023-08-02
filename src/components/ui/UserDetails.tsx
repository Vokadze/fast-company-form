import { useParams, Link } from 'react-router-dom';
import { IUser } from '../../types/user.type';
import { QualitiesList } from './Qualities/QualitiesList';
import { AppRoute } from '../../Consts';

interface UserDetailsProps {
    userData: IUser;
}

const UserDetails = ({
    userData: {
        name,
        profession,
        qualities,
        completedMeetings,
        rate
    }
}: UserDetailsProps): JSX.Element => {
    const { userId } = useParams();

    return (
        <>
            <h1>{name}</h1>
            <h2 className='pb-3'>Профессия: {profession.name}</h2>
            <div className="pb-2">
                <QualitiesList qualities={qualities} />
            </div>
            <p>completedMeetings: {completedMeetings}</p>
            <h2 className='pb-2'>Rate: {rate}</h2>
            <Link className="btn btn-secondary" to={AppRoute.Users}>Все Пользователи</Link>
            {userId && <Link className="btn btn-primary ms-3" to={`${AppRoute.Users}/${userId}/edit`}>Редактировать</Link>}

        </>
    );
};

export { UserDetails };
