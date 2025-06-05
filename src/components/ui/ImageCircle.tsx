type ImageCircleProps = {
  image: string;
};

export function ImageCircle({ image }: ImageCircleProps) {
  return (
    <div className="w-full h-full aspect-square rounded-full border-1 border-gold shadow-2xl overflow-hidden">
      <img
        src={image}
        alt={`${image}`}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
