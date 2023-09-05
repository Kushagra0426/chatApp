import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
            projectId='21c41dc7-ccb1-4fe9-bcd4-bb04e08b23f9'
            username={props.user.username}
            secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;