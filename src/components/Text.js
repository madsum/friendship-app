import styled from 'styled-components/native';

export const Text = styled.Text`color: #4b5c5d;`;
export const Bold = Text.extend`font-weight: bold;`;

export const CenteredText = Bold.extend`text-align: center;`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24;
  font-weight: 300;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 14px;
`;

export const Incommon = styled.Text`
  font-family: 'NunitoSans-Regular';
  font-size: 14px;
  line-height: 24;
  font-weight: 300;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 14px;
  height: 19;
  letter-spacing: 0.4;
`;

export const YeahColor = styled.Text`
  color: #ff8a65;
  font-family: 'NunitoSans-Bold';
`;

export const NaahColor = styled.Text`
  color: #99ccff;
  font-family: 'NunitoSans-Bold';
`;

export const FrienshipFont = styled.Text`font-family: 'Friendship_version_2';`;

export const LastMessage = styled.Text`color: #b1b1b1;`;

export const Title = Bold.extend`
  font-size: 28;
  text-align: center;
  padding: 16px;
`;
export const Header = styled.Text`
  font-size: 16px;
  letter-spacing: 1.59px;
  text-align: center;
  color: #3b3b3d;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const SenderName = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #666;
`;

export const SmallHeader = styled.Text`
  font-size: 13px;
  letter-spacing: 1.59px;
  text-align: center;
  color: #3b3b3d;
  margin-bottom: 14px;
`;
