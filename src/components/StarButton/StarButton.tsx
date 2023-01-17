import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface StarButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

const StarButton = (props: StarButtonProps) => {
  const { isFavorite, onClick } = props;
  const Icon = isFavorite ? <StarFilled /> : <StarOutlined />;
  return (
    <Button icon={Icon} onClick={onClick}>
      Star
    </Button>
  );
};

export default StarButton;
