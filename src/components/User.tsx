import React from 'react';


interface IUser {
    name: string;
    email?: string;
}

interface Props{
    users: IUser;
}

const User: React.FC<Props> = ({users}) => {
    return (
        <div>
            <strong>Name: </strong> {users.name} <br />
            <strong>Email: </strong> {users.email || 'Não possui e-mail'} <br /> <br />
        </div>
    );
};

export default User;