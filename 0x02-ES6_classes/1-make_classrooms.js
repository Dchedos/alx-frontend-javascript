import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const classrooms = [];

  sizes.forEach((size) => {
    const classroom = new ClassRoom(size);
    classrooms.push(classroom);
  });

  return classrooms;
}

const rooms = initializeRooms();
console.log(rooms);
