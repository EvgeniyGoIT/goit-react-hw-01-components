import styled from '@emotion/styled';


export const FriendListStyled = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0px;
`;
export const FriendItemStyled = styled.li`
  display: flex;
  padding: 16px;
  border: 1px solid #888888;
  align-items: center;
  `;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding-left: 50px;
  `;

  export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding-left: 50px;
  `;

 export const Status = styled.span`
  padding: 10px 10px;
  border-radius: 50%;
  color: #fff;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`; 