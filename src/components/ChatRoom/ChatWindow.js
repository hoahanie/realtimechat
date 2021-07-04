import { UserAddOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import styled from "styled-components";
import { Button, Tooltip, Avatar, Form, Input, Alert } from "antd";
import Message from "./Message";
import { AppContext } from "../../Context/AppProvider";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__description {
      font-size: 12px;
    }
  }
`;
const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: -moz-calc(100% - 56px);
  height: -webkit-calc(100% - 56px);
  height: calc(100% - 56px);
  display: flex;
  padding: 11px;
  flex-direction: column;
  justify-content: flex-end;
`;

const FormStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  const { selectedRoom, rooms, members, setIsInviteMemberVisible, isInviteMemberVisible } =
    useContext(AppContext);
  
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">{selectedRoom.name}</p>
          <span className="header__description">
            {" "}
            {selectedRoom.description}
          </span>
        </div>
        <ButtonGroupStyled>
          <Button
            icon={<UserAddOutlined />}
            type="text"
            onClick={() => {
              setIsInviteMemberVisible(true);
            }}
          >
            Moi
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            {members.map((member) => (
              <Tooltip title={member.displayName} key={member.id}>
                <Avatar src={member.photoURL}>
                  {member.photoURL
                    ? ""
                    : member.displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
              </Tooltip>
            ))}
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createdAt={121311213}
          />
          <Message
            text="Test 123"
            photoURL={null}
            displayName="Tung"
            createdAt={121311213}
          />
          <Message
            text="Test abc"
            photoURL={null}
            displayName="Tung"
            createdAt={121311213}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createdAt={121311213}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Nhap tin nhan.."
              bordered={false}
              autocomplete="off"
            />
          </Form.Item>
          <Button>Gui</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}

