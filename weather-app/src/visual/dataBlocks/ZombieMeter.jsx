import styled from "styled-components";
import "../CSS/elements.css";
import { useState, useEffect } from "react";
import "../CSS/elements.css";

const ZombieMeterContainer = styled.div`
  width: 80%;
  height: 20vh;
  padding: 5px;
  border-radius: 8px;
  text-align: center;

  /*   background-color: rgba(0, 0, 0, 0.3); */

  /*  background-color: purple; */
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 150%;
  color: black;
  text-shadow: 1px 1px 2px red;
`;

const ZombieContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  /*  border: 2px solid black; */
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ZombieHorde = styled.div`
  display: flex;
  transition: transform 2s;
  transform: translateX(-${(props) => props.chance}%);
`;

const ZombiePic = styled.img`
  height: 6vh;
  transform: scaleX(-1);
  background: transparent;
  margin-left: -10px;
`;

const Head = styled.div`
  font-size: 80%;
  margin-bottom: 15px;
  /*   background-color: rgba(0, 0, 0, 0.1); */
  padding: 3px;
`;

function ZombieMeter(props) {
  const [isZombie, setZombie] = useState(50);

  useEffect(() => {
    setZombie(Math.floor(Math.random() * 99) + 1);
  }, [props.props]);

  return (
    <ZombieMeterContainer>
      <Head>
        Chance to <br /> Zombie-Apocalypse
      </Head>
      <ZombieContainer>
        <ZombieHorde chance={100 - isZombie}>
          <ZombiePic
            src="https://www.pinclipart.com/picdir/middle/127-1275497_ghoul-clipart-zombie-plants-vs-zombies-2-rally.png"
            alt="zombie1"
          />
          <ZombiePic
            src="https://www.vhv.rs/dpng/d/259-2591227_plants-vs-zombies-zombie-png-transparent-png.png"
            alt="zombie2"
          />
          <ZombiePic
            src="https://www.pngfind.com/pngs/m/486-4861661_plants-vs-zombies-png-transparent-png.png"
            alt="zombie3"
          />
          <ZombiePic
            src="https://www.pinclipart.com/picdir/middle/127-1275497_ghoul-clipart-zombie-plants-vs-zombies-2-rally.png"
            alt="zombie1"
          />
          <ZombiePic
            src="https://www.vhv.rs/dpng/d/259-2591227_plants-vs-zombies-zombie-png-transparent-png.png"
            alt="zombie2"
          />
        </ZombieHorde>
      </ZombieContainer>

      <div>{isZombie} % </div>
    </ZombieMeterContainer>
  );
}

export default ZombieMeter;
