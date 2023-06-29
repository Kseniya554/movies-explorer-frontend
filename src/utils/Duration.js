export default function durationMovie(time) {
  const hours = Math.trunc(time / 60);
  const minutes = time % 60;
  return hours + 'ч ' + minutes + 'м';
}