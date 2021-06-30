import { UserAddOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { Button, Tooltip, Avatar, Form, Input, Alert } from "antd";
import Message from "./Message";

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
  max-height:100%;
  overflow-y: auto;
`;

export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__description"> Day la Room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            {" "}
            Moi
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="a">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="a">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={121311213}
          />
          <Message
            text="Test 123"
            photoURL={null}
            displayName="Tung"
            createAt={121311213}
          />
          <Message
            text="Test abc"
            photoURL={null}
            displayName="Tung"
            createAt={121311213}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={121311213}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Nhap tin nhan.."
              bordered={false}
              autocomplete='off'
            />
          </Form.Item>
          <Button>Gui</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
}
