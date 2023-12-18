const Card = () => {
  return (
    <div className="card">
      <img src="/qr.png" alt="QR-img" className="img" />
      <div className="container">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="text">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
