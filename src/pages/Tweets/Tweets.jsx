import { Card } from 'components/Card/Card';
import { createNextUsers } from 'components/helpers';
import { getAllUsers } from 'data/api';
import { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import { Button, Conteiner, List } from './Tweets.styled';

export const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [showedUsers, setShowedUsers] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [perPage] = useState(3);

  const handleLoadMore = () => {
    const nextUsers = createNextUsers(allUsers, showedUsers, perPage);
    setShowedUsers(prevUsers => [...prevUsers, ...nextUsers]);

    if (showedUsers.length + perPage >= allUsers.length) {
      setLoadMoreVisible(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setLoadMoreVisible(false);
    getAllUsers()
      .then(users => {
        setShowedUsers(users.slice(0, perPage));
        setAllUsers(users);
      })
      .finally(() => {
        setIsLoading(false);
        setLoadMoreVisible(true);
      });
  }, [perPage]);
  return (
    <>
      {!isLoading ? (
        <Conteiner>
          <List>
            {showedUsers.map(user => (
              <Card key={user.id} user={user} />
            ))}
          </List>
          {loadMoreVisible && (
            <Button onClick={handleLoadMore}>Load More</Button>
          )}
        </Conteiner>
      ) : (
        <Vortex
          visible={true}
          height="240"
          width="240"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      )}
    </>
  );
};
