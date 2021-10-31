import styled from 'styled-components';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
    flex-flow: column nowrap;
    background-color: yellow;
    z-index: 1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-right: 2rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
    a {
        text-decoration: none;
        color: grey;
    }

`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <h3>
      Choose an image to randomly generate a track by an artist who matches your star sign!
      <br/>
      <br/>
      The full playlists can be found <a href="https://open.spotify.com/user/ozpb5dba2y49pslou4beoev9x?si=5755aa9c8a5e4491">here</a>.
      <br/>
      <br/>
      App and playlists by <a href="https://randyriback.com">Randy Riback</a>, photography by <a href="https://www.instagram.com/__koreanbbq/">Maurice Sarah</a>.
     <br/>
      <br/>
      Discover more curated and original music from Randy <a href="https://www.soundcloud.com/jungdeejay">here</a>.
      </h3>
    </Ul>
  )
}

export default RightNav