function Banner({ banner }) {
  return (
    <div className="my-8 xl:px-20">
      <img src={banner} alt={`${banner}_image`} />
    </div>
  );
}

export default Banner;
