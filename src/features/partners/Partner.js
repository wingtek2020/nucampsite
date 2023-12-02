const Partner = ({ partner }) => {
  if (partner) {
    const { image, name, description } = partner;
    return (
      <>
        <img
          className="mr-2"
          src={image}
          alt={name}
          style={{ width: "150px" }}
        />
        <div className="m-4">
          <h5 className="fw-bold">{name}</h5>
          {description}
        </div>
      </>
    );
  }
};

export default Partner;
