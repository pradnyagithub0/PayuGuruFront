import {
    Dropdown,
    Popover,
    Whisper,
    WhisperInstance,
    Stack,
    Badge,
    Avatar,
    IconButton,
    List,
    Button
  } from 'rsuite';
  import NoticeIcon from '@rsuite/icons/Notice';

  import 'rsuite/Button/styles/index.css';
import 'rsuite/ButtonGroup/styles/index.css';
import 'rsuite/ButtonToolbar/styles/index.css';
import 'rsuite/IconButton/styles/index.css';
import 'rsuite/List/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Dropdown/styles/index.css';
// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/IconButton/styles/index.css';
import 'rsuite/Stack/styles/index.css';
import 'rsuite/Popover/styles/index.css';

// (Optional) Import component styles. If you are using Less, import the `index.less` file. 
import 'rsuite/Badge/styles/index.css';
import { useRef } from 'react';

const renderNoticeSpeaker = ({ onClose, left, top, className }, ref) => {
    const notifications = [
      [
        '7 hours ago',
        'The charts of the dashboard have been fully upgraded and are more visually pleasing.'
      ],
      [
        '13 hours ago',
        'The function of virtualizing large lists has been added, and the style of the list can be customized as required.'
      ],
      ['2 days ago', 'Upgraded React 18 and Webpack 5.'],
      [
        '3 days ago',
        'Upgraded React Suite 5 to support TypeScript, which is more concise and efficient.'
      ]
    ];
  
    return (
      <Popover ref={ref} className={className} style={{ left, top, width: 300 }} title="Last updates">
        <List>
          {notifications.map((item, index) => {
            const [time, content] = item;
            return (
              <List.Item key={index}>
                <Stack spacing={4}>
                  <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
                </Stack>
  
                <p>{content}</p>
              </List.Item>
            );
          })}
        </List>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button onClick={onClose}>More notifications</Button>
        </div>
      </Popover>
    );
  };
  



const NotificationButton = () => {

const trigger = useRef(null);

    return (
      <Stack className="header" spacing={8}>

      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderNoticeSpeaker}>
              <IconButton onClick={renderNoticeSpeaker}
              icon={
                  <Badge content={5}>
                  <NoticeIcon style={{ fontSize: 20 }} className='notice-text' />
                  </Badge>
              }
              />
          </Whisper>
      </Stack>
    )
};

export default NotificationButton;