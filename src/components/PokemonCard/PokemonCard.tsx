import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "../StarButton/StarButton";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setFavorite } from "../../actions";

interface PokemonCardProps {
  id: number;
  name: string;
  image?: string;
  abilities?: any[];
  isFavorite: boolean;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { name, image, abilities, id, isFavorite } = props;
  const dispatch = useDispatch<Dispatch<any>>();
  const abilitiesList = abilities?.map((ability) => ability.ability.name);

  const handleStarClick = () => {
    dispatch(setFavorite({ id }));
  };

  return (
    <Card
      title={name}
      hoverable
      cover={<img alt={name} src={image} />}
      extra={<StarButton isFavorite={isFavorite} onClick={handleStarClick} />}
    >
      <Meta title="Abilities" description={abilitiesList?.join(", ")} />
    </Card>
  );
};

export default PokemonCard;
