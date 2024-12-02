import  { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedFoto from "./FeedFoto";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Feed = ({ user }) => {
  const [modalFoto, setModalFoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
        <Helmet>
        <title>Dogs | Feed </title>
        <meta name="description" content="Página de Login" />
      </Helmet>
      {modalFoto && <FeedModal photo={modalFoto} setModalFoto={setModalFoto} />}
      {pages.map((page) => (
        <FeedFoto
          key={page}
          page={page}
          user={user}
          setModalFoto={setModalFoto}
          setInfinite={setInfinite}
        />
      ))}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
}

Feed.PropTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
};

export default Feed;
