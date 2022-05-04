import Connection from '../../connection/Connection';
import PopupMediator from '../../controllers/PopupMediator';
import Chat from '../../models/Chat';
import { PopupProfile } from '../popups/PopupUserProfile';

export default function ChatMessage({
  data,
  isBlock = false
}: {
  data: Chat;
  isBlock: boolean;
}) {
  const { user, message, time } = data;

  return (
    <div
      className={`chat-message ${
        user.id === Connection.instance.me!.id ? 'chat-message-self' : ''
      } ${isBlock ? 'is-block' : ''}`}
    >
      {!isBlock && (
        <div className="chat-card">
          <img src={user.currentAvatar} alt="" />
          {user.isGuest && <span className="badge guest">Guest</span>}
          <span className="chat-username">
            <button className="link" onClick={() => {}}>
              {user.username}
            </button>
            <span className="muted"> ᛫ </span>
            <span className="muted">{new Date(time).toLocaleTimeString()}</span>
          </span>
        </div>
      )}
      <span className={`chat-text ${isBlock ? 'is-block' : ''}`}>
        {message}
      </span>
    </div>
  );
}
