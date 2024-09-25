import { useParams } from "react-router-dom";
import { FormattedDate, FormattedMessage } from "react-intl";

function Profile() {
  const { username } = useParams();
  return (
    <div>
      <h1>{username}</h1>
      <p>
        <FormattedMessage id="today_is" />
        <FormattedDate
          value={new Date()}
          year="numeric"
          month="long"
          day="2-digit"
          weekday="long"
        />
      </p>
    </div>
  );
}

export default Profile;
