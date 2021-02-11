import React from 'react';

import { IAnnouncement } from 'types/IAnnouncement';
import { Header } from '../components';

interface IProps {
  announcement: IAnnouncement;
}

export const TestAnnouncement = ({ announcement }: IProps) => {
  return (
    <div>
      <Header title="Test announcement" />
      <p>Announcement type: ${announcement.announcementType}</p>
    </div>
  );
};
