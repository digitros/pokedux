import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface PokemonCardProps {
  name: string;
}

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Card
      title={props.name}
      hoverable
      cover={<img alt="example" src="https://via.placeholder.com/150" />}
      extra={<StarOutlined />}
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  );
};

export default PokemonCard;
