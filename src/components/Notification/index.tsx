import React, { useEffect } from 'react';
import { message } from 'antd';

interface NotificationProps {
  type: 'success' | 'error' | 'warning';
  content: string;
}

const Notification: React.FC<NotificationProps> = ({ type, content }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    messageApi.open({
      type,
      content,
    });
  }, [type, content, messageApi]);

  return <>{contextHolder}</>;
};

export default Notification;
