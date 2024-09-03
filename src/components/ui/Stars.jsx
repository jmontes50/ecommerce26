const Stars = ({ rating }) => {
  const totalStars = 5;

  const arr = [...Array(totalStars)];

  return (
    <div className="flex">
      {arr.map((_, index) => (
        <i
          className={`text-yellow-400 ${
            index < rating ? "fa-solid" : "fa-regular"
          } fa-star`}
          key={index}
        ></i>
      ))}
    </div>
  );
};

export default Stars;
