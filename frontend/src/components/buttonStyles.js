import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background-color: #f00;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #000000;
    color: white;
    margin-left: 4px;
    &:hover {
      background-color: #212020;
      border-color: #212020;
      box-shadow: none;
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background-color: #650909;
    color: white;
    &:hover {
      background-color: #eb7979;
      border-color: #f26767;
      box-shadow: none;
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background-color: #080a43;
    color: #fff;
    &:hover {
      background-color: #0a1e82;
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background-color: #270843;
    color: #fff;
    &:hover {
      background-color: #3f1068;
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background-color: #7f56da;
    color: #fff;
    &:hover {
      background-color: #7a1ccb;
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background-color: #2d5016;
    color: #ffffff;
    font-weight: bold;
    &:hover {
      background-color: #3d6b1f;
      box-shadow: 0 4px 8px rgba(45, 80, 22, 0.3);
    }
  }
`;

export const YellowButton = styled(Button)`
  && {
    background-color: #f4d03f;
    color: #000000;
    font-weight: bold;
    &:hover {
      background-color: #f7dc6f;
      box-shadow: 0 4px 8px rgba(244, 208, 63, 0.3);
    }
  }
`;

export const WhiteButton = styled(Button)`
  && {
    background-color: #ffffff;
    color: #2d5016;
    border: 2px solid #2d5016;
    font-weight: bold;
    &:hover {
      background-color: #f5f5f5;
      border-color: #3d6b1f;
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #2c1006;
    color: white;
    &:hover {
      background-color: #40220c;
      border-color: #40220c;
      box-shadow: none;
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background-color: #2f2b80;
    color: white;
    &:hover {
      background-color: #534ea6;
      border-color: #473d90;
      box-shadow: none;
    }
  }
`;
