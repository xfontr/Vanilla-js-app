type CreateElementProps = {
  element: string;
  className?: string;
  textContent?: string;
};

const createElement = ({
  element,
  className,
  textContent,
}: CreateElementProps) => {
  const newElement = document.createElement(element);

  if (textContent) newElement.textContent = textContent;
  if (className) newElement.className = className;

  return newElement;
};

export default createElement;
