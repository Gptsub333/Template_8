import { features } from "../constants";

const Features = () => {
  return (
    <div
      className="relative mt-20 border-b border-neutral-800 mi-h-[800px]"
      id="Features"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium uppercase px-2 py-1">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Effortless Blockchain
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            App Development
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="">
                  <h5 className="mt-1 mb-6 text-xl">{item.text} </h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {item.description}{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
