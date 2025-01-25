interface childrenProps {
  children: React.ReactNode;
  color: string;
  setColor?: React.Dispatch<React.SetStateAction<string>>;
}

//TODO - finish the provider handling for color
export default function Provider({ children }: childrenProps) {
  return <>{children}</>;
}
