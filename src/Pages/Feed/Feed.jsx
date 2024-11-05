import React, { useState } from 'react';
import FeedModal from './FeedModal';
import FeedFoto from './FeedFoto';

const Feed = () => {
  const [modalFoto, setModalFoto] = useState(null);

  return (
    <div>
      {modalFoto && <FeedModal photo={modalFoto} setModalFoto={setModalFoto}/>}
      <FeedFoto setModalFoto={setModalFoto} /> 
    </div>
  );
};

export default Feed;
