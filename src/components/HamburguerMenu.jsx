const HamburguerMenu = ({handleMenuSlider}) => {
  return (
    <div onClick={handleMenuSlider} className="bg-green-500 h-8 w-10 flex flex-col gap-1 items-center justify-center cursor-pointer z-10">
      <div className="w-full bg-yellow-300 h-1 flex gap-1 justify-center px-1">
        <div className="w-4/5 h-full bg-black rounded-full"></div>
        <div className="h-full rounded-full bg-black aspect-square"></div>
      </div>
      <div className="w-full bg-yellow-300 h-1 flex gap-1 justify-center px-1">
        <div className="w-4/5 h-full bg-black rounded-full"></div>
        <div className="h-full rounded-full bg-black aspect-square"></div>
      </div>
      <div className="w-full bg-yellow-300 h-1 flex gap-1 justify-center px-1">
        <div className="w-4/5 h-full bg-black rounded-full"></div>
        <div className="h-full rounded-full bg-black aspect-square"></div>
      </div>
    </div>
  );
};
export default HamburguerMenu;
