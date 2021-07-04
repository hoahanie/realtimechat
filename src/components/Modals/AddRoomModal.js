import React, { useContext } from "react";
import { Form, Modal, Input } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { addDocument } from "../../firebase/services";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    console.log({ formData: form.getFieldsValue() });
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title="Tao phong"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Ten phong" name="name">
            <Input placeholder="Nhap ten phong ..." />
          </Form.Item>
          <Form.Item label="Mo ta" name="description">
            <Input.TextArea placeholder="Nhap mo ta" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
