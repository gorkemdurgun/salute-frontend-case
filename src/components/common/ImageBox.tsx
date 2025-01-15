import Image from 'next/image';

type Props = {
  alt: string;
  src: string;
  className?: string;
};

const ImageBox: React.FC<Props> = ({ alt, src, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default ImageBox;
