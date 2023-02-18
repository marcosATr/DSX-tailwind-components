import Button from "./Button";
import Typography from "./Typography";

interface ICardProps {
  image?: string;
}
export default function Card({ image, title, text }) {
  return (
    <div>
      <div>{image}</div>
      <div>
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
        <Button />
      </div>
    </div>
  );
}
