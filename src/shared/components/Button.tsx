import Image from "next/image";

interface buttonProp {
  text: string;
  icon: string;
  width?: number;
  height?: number;
  className: string;
}

const Button = ({ text, icon, width, height, className }: buttonProp) => {
  return (
    <div className="group">
      <p className={className}>
        {text}
        <Image
          src={icon}
          alt={"rocket"}
          width={width || 30}
          height={height || 30}
          className="button-animation"
        />
      </p>
    </div>
  );
};

export default Button;
