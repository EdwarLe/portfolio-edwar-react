const HamburguerMenu = ({ handleMenuSlider, menuSlider }) => {
  const menuRotate = menuSlider ? "opacity-0" : "opacity-1";
  return (
    <div
      onClick={handleMenuSlider}
      className={`h-10 aspect-square flex gap-1 items-center justify-center cursor-pointer flex-wrap p-1 group hover:rotate-180 transition-transform ${
        menuSlider && "rotate-45"
      }`}
    >
      <div
        className={`bg-white w-1/4 aspect-square rounded-full group-hover:opacity-0  transition-opacity ${menuRotate}`}
      ></div>
      <div className="bg-white w-1/4 aspect-square rounded-full transition-opacity gro"></div>
      <div
        className={`bg-white w-1/4 aspect-square rounded-full group-hover:opacity-0  transition-opacity ${menuRotate}`}
      ></div>
      <div className="bg-white w-1/4 aspect-square rounded-full transition-opacity"></div>
      <div
        className={`bg-white w-1/4 aspect-square rounded-full transition-opacity`}
      ></div>
      <div className="bg-white w-1/4 aspect-square rounded-full transition-opacity"></div>
      <div
        className={`bg-white w-1/4 aspect-square rounded-full group-hover:opacity-0  transition-opacity ${menuRotate}`}
      ></div>
      <div className="bg-white w-1/4 aspect-square rounded-full transition-opacity"></div>
      <div
        className={`bg-white w-1/4 aspect-square rounded-full group-hover:opacity-0  transition-opacity ${menuRotate}`}
      ></div>
    </div>
  );
};
export default HamburguerMenu;
