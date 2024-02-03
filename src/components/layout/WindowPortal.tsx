import ReactDOM from "react-dom";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react"

interface Props {
  children: ReactNode;
  onCloseWindow: (ref: RefObject<Window | null>) => void;
}

export const WindowPortal = ({ children }: Props) => {
  const externalWindow = useRef<Window | null>(null);
  const [windowPortal, setWindowPortal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    externalWindow.current = window.open('', '', 'width=800,height=800,left=300,top=200');

    const element = document.createElement('div');
    if (externalWindow.current) {
      externalWindow.current.document.body.appendChild(element);
      setWindowPortal(element);

      return () => {
        externalWindow.current?.close();
      }
    }
  }, []);

  if (!windowPortal) return null;

  return ReactDOM.createPortal(children, windowPortal);
}