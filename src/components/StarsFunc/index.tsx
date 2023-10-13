import { ColorStarsIcon } from "../Icons/ColorStarIcon";
import { NoColorStarsIcon } from "../Icons/NoColorStarIcon";

type CreatStarsArrayProps = {
  starsNumber: number;
};

export function CreatStarsArray({ starsNumber }: CreatStarsArrayProps) {
  const Starsarray: number[] = [...Array(starsNumber).keys()];
  const Emptyarray: number[] = [...Array(5 - starsNumber).keys()];

  return (
    <div className="flex">
      {Starsarray.map((star) => (
        <ColorStarsIcon key={star} />
      ))}
      {Emptyarray.map((star) => (
        <NoColorStarsIcon key={star} />
      ))}
    </div>
  );
}
