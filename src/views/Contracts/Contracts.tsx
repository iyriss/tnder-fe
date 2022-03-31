import React from "react";
import styled from "styled-components";

const userProfiles = [
  { name: "test", age: 29 },
  { name: "test 2", age: 22 },
  { name: "test 3", age: 37 },
];

const Container = styled.div`
  border: 2px solid black;
  display: flex;
`;

const ContractsProfile = (props: any) => {
  return (
    <div>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  );
};

export const Contracts: React.FC = () => {
  return (
    <Container>
      <div>Contracts</div>
      <div>
        {userProfiles.map(function (user, i) {
          return <ContractsProfile user={user} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default Contracts;
