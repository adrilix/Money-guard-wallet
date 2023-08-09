import styled from 'styled-components';
import bgimg from '../../svg/Rectangle4.png';

export const LogoTitle = styled.h2`
  color: #fbfbfb;
  font-family: Poppins;
  font-size: 26.963px;
  margin-top: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px;
  z-index: 1000;

  background-image: url(${bgimg});
  border-radius: 8px;
  align-items: center;
  width: 533px;
  height: 447px;
`;

export const Title = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  margin-top: 52px;
  @media (max-width: 767px) {
    width: 200px;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media (max-width: 767px) {
    margin: auto;
  }
`;

export const ButtonLogOut = styled.button`
  border: none;

  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(167deg, #ffc727 0%, #9e40ba 61.46%, #7000ff 90.54%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  width: 300px;
  height: 50px;
  margin-top: 52px;

  &:hover {
    color: var(--white, #fbfbfb);

    transform: scale(1.05);
  }

  &:focus {
    outline: none;

    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 50px;
  }
`;

export const ButtonCancel = styled.button`
  border: none;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  color: #623f8b;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  width: 300px;
  height: 50px;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 50px;
  }
`;
