import ClassRoom from './0-classroom';

export default function setupClassRooms() {
  const sizes = [19, 20, 34];
  return sizes.map(size => new ClassRoom(size));
}
