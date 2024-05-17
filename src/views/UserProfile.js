import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = ({}) => {
    return (
        <div className="user-profile">
            <img src={require("../Imagenes/images.png")} className="profile-picture" />
            <h2 className="user-name">Pepito Perez</h2>
            <p className="user-description">Calle 2, Bogotá, Colombia</p>
        </div>
    );
};

export default UserProfile;