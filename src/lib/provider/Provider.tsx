interface childrenProps {
  children: React.ReactNode;
  color: string;
}

//TODO - finish the provider handling for color
export default function Provider({ children }: childrenProps) {
  return <>{children}</>;
}
