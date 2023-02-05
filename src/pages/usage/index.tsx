import classNames from "classnames";
import { useRouter } from "next/router";
import { Button } from "../../components/ui/Button/Button";
import Typography from "../../components/ui/Typography/Typography";

const UsagePage = () => {
  const router = useRouter();

  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "items-center",
        "justify-between"
      )}
    >
      <Typography variant="title">Usage</Typography>
      <Button
        variant="solid"
        color="primary"
        onClick={() => router.push("/usage/create")}
      >
        Create
      </Button>
    </div>
  );
};

export default UsagePage;
