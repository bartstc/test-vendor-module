import {AnnouncementType} from "./AnnouncementType";

export interface IAnnouncement {
  id: string;
  orderTitle: string;
  announcementType: AnnouncementType;
}