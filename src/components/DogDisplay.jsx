const DogDisplay = ({ dog, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dog-container">
      <img src={dog} alt="A Random Dog" />
    </div>
  );
};

export default DogDisplay;

