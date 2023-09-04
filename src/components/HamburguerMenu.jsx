const HamburguerMenu = ({handleMenuSlider}) => {
  return (
    <div onClick={handleMenuSlider} className="h-8 w-10 flex flex-col gap-1 items-center justify-center cursor-pointer">
      <div className="w-full h-1 flex gap-1 justify-center px-1">
        <div className="w-4/5 h-full bg-white rounded-full"></div>
        <div className="h-full rounded-full bg-white aspect-square"></div>
      </div>
      <div className="w-full h-1 flex gap-1 justify-center px-1">
        <div className="w-4/5 h-full bg-white rounded-full"></div>
        <div className="h-full rounded-full bg-white aspect-square"></div>
      </div>
      <div className="w-full h-1 flex gap-1 justify-center px-1">
        <div className="w-4/5 h-full bg-white rounded-full"></div>
        <div className="h-full rounded-full bg-white aspect-square"></div>
      </div>
    </div>
  );
};
export default HamburguerMenu;
