function Banner({ banner }) {
  return (
    <div className="my-8 xl:px-20">
      <img className="xl:rounded-xl" src={banner} alt={`${banner}_image`} />
    </div>
  );
}

export default Banner;
