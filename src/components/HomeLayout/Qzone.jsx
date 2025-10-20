import classImage from "../../assets/class.png";
import swimmingImage from "../../assets/swimming.png";
import playgroundImage from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="p-4 mt-10 bg-[#F3F3F3]">
      <h2 className="text-[20px] font-semibold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={classImage} alt="Class" className="w-full" />
        <img src={swimmingImage} alt="Swimming" className="w-full" />
        <img src={playgroundImage} alt="Playground" className="w-full" />
      </div>
    </div>
  );
};

export default Qzone;
