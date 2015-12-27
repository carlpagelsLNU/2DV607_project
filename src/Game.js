let imagePosition = [0, 0];
let observer = null;

function emitChange() {
  observer(imagePosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveImage(toX, toY) {
  imagePosition = [toX, toY];
  emitChange();
}