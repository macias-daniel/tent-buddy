import React from "react";
// import API from "../utils/API";
// import { useAuth } from "../utils/auth";
import { Grid } from "semantic-ui-react";
import WidgetSorter from "./ProfileWidgets/WidgetSorter";

function Profile() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const { user } = useAuth();

  // useEffect(() => {
  //   API.getUser(user.id).then(res => {
  //     setUsername(res.data.username);
  //     setEmail(res.data.email);
  //   });
  // }, [user]);

  return (
    <div>
      <Grid centered>
        {/* <Segment
          compact
          className="widgetTitle"
          style={{ backgroundColor: "rgba(144, 238, 144, 0)" }}
        >
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <Link to="/">Go home</Link>
        </Segment> */}
        <WidgetSorter />
      </Grid>
    </div>
  );
}

export default Profile;
