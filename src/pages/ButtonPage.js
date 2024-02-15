import { GoBell, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button success danger outline onClick={handleClick}>
          <GoBell />
          Test1
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloudDownload />
          Test2
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Test3
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Test4
        </Button>
      </div>
      <div>
        <Button primary>Test5</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
