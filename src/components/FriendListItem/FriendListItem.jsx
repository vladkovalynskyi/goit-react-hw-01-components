import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={`${css.status} ${isOnline ? css.online : css.offline}`}
    ></span>
    <img className={css.avatar} src={avatar} alt={name} width='48' />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;