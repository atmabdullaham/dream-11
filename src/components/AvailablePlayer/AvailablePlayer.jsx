import { useState } from "react";

const AvailablePlayer = ({ player, setAvabilableTaka, avaliableTaka }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handlePlayerSelect = (price) => {};
  const {
    img,
    name,
    country,
    role,
    batting_style,
    bowling_style,
    price,
    rating,
  } = player;
  console.log(player);
  return (
    <div>
      <div className="card bg-emerald-200  shadow-sm">
        <figure className="mx-4 mt-4 h-64">
          <img
            src={img}
            alt={player.name}
            className="rounded-xl w-fit h-fit overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between items-center">
            <h4 className="text-base font-semibold text-gray-500">{country}</h4>
            <button className="text-gray-500">{role}</button>
          </div>
          <hr className="text-gray-400 my-2" />
          <div className="flex justify-between items-center">
            <h4 className="text-base text-gray-500 font-semibold">Rating</h4>
            <button className="text-gray-500">{rating}</button>
          </div>

          <div className="flex justify-between items-center">
            <h4 className="text-base text-gray-500 font-semibold">
              Batting Style
            </h4>
            <button className="text-gray-500">{batting_style}</button>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-base text-gray-500 font-semibold">
              Bowling Style
            </h4>
            <button className="text-gray-500">{bowling_style}</button>
          </div>
          <div className="card-actions justify-between items-center pt-4">
            <h4 className="text-base text-gray-500 font-semibold">
              Price: <span>{price}</span>
            </h4>
            <button
              onClick={() => {
                if (avaliableTaka >= parseInt(price)) {
                  setAvabilableTaka(avaliableTaka - parseInt(price));
                  setIsSelected(true);
                } else {
                  alert("You don't have enough coins");
                }
              }}
              className={`btn btn-accent text-white ${
                isSelected && "btn-disabled"
              }`}
            >
              {!isSelected ? "Choose Player" : "Selected"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
