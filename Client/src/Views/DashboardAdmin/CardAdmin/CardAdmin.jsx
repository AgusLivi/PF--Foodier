const CardAdmin = ({ name, email, location }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{location}</p>
        </div>
    );
};

export default CardAdmin;