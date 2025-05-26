import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "../components/ui/separator";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-between">
      {/* heading */}
      <Heading
        title="Dashboard"
        description="create and start your mock interview"
      />

      <Link to={"/generate/create"}>
        <Button>
          <Plus /> Add New
        </Button>
      </Link>
      {/* content */}


      {/* <Separator>

      </Separator> */}
    </div>
  );
};

export default Dashboard;
