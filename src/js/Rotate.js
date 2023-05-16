export default class Rotate {
  static setRotation(event, element, torotate) {
    const leftMotionForce = event.clientX - element.getBoundingClientRect().left;
    const rightMotionForce = element.getBoundingClientRect().right - event.clientX;

    if (leftMotionForce >= rightMotionForce) {
      torotate.classList.add('rotate-left');
    } else {
      torotate.classList.add('rotate-right');
    }
  }
}
