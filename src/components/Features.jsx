function Features({ features }) {
  return (
    <div className="lg:px-20 mt-8 overflow-scroll [scrollbar-width:none]">
      <div className="flex justify-start items-center snap-center whitespace-nowrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#5dcaf133] p-0 w-[100%] h-[13rem] flex flex-col items-center justify-center"
          >
            <div className="border-l-2 border-[#1456ac27] w-full flex flex-col justify-center items-center">
              <span className="bg-[#fff] w-[4.3rem] rounded-full p-4 block m-auto mb-4">
                <img src={feature.image} alt="features_icon" />
              </span>
              <p className="text-center font-light text-[0.9rem] w-[11rem] whitespace-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
