const FetchButton = ({ fetchDog }) => {
  return (
    <button className="fetch-button" onClick={fetchDog}>Get a New Dog</button>
  )
}

export default FetchButton