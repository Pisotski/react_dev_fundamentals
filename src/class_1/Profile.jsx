import "../assets/profile.css";

const Profile = ({ user: { name, imageUrl, imageSize } }) => {
	return (
		<>
			<img
				className="avatar"
				src={imageUrl}
				alt={name}
				style={{ height: imageSize, width: imageSize }}
			/>
			<h2>{name}</h2>
		</>
	);
};

export { Profile };
