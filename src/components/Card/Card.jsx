import { useEffect, useState } from 'react';
import logo from 'png/logo.png';

import {
  CardImageWrap,
  CardItem,
  CardLogo,
  CardText,
  UserPhoto,
  UserPhotoWrap,
} from 'components/Card/Card.styled';
import { Button } from 'pages/Tweets/Tweets.styled';

const USERS_KEY = 'followed';

export function Card({ user }) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersQnt, setFollowersQnt] = useState(user.followers);

  useEffect(() => {
    const savedFollowersID = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const isUserFollowed = savedFollowersID.includes(user.id);
    if (isUserFollowed) {
      setIsFollowed(true);
      setFollowersQnt(prevFollowersCount => prevFollowersCount + 1);
    }
  }, [user.id]);

  const handleToggleFollow = () => {
    setIsFollowed(prevIsFollowed => !prevIsFollowed);
    isFollowed
      ? setFollowersQnt(prevFollowersCount => prevFollowersCount - 1)
      : setFollowersQnt(prevFollowersCount => prevFollowersCount + 1);

    const savedFollowedIds = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const newFollowedIds = isFollowed
      ? savedFollowedIds.filter(id => id !== user.id)
      : [...savedFollowedIds, user.id];

    localStorage.setItem(USERS_KEY, JSON.stringify(newFollowedIds));
  };

  const btnText = isFollowed ? 'Following' : 'Follow';
  const normalizedTweetsQnt = user.tweets.toLocaleString('en');
  const normalizedFollowersQnt = followersQnt.toLocaleString('en');

  return (
    <CardItem>
      <CardLogo src={logo} alt="Logo" />
      <CardImageWrap></CardImageWrap>
      <UserPhotoWrap>
        <UserPhoto src={user.avatar} alt="User" />
      </UserPhotoWrap>
      <CardText>{normalizedTweetsQnt} tweets</CardText>
      <CardText>{normalizedFollowersQnt} Followers</CardText>
      <Button type="button" isActive={isFollowed} onClick={handleToggleFollow}>
        {btnText}
      </Button>
    </CardItem>
  );
}
