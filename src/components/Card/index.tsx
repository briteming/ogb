import { ImgHTMLAttributes, ReactNode } from "react";
import {
  CardContainer,
  CardHeaderContainer,
  CardProps,
  CardSpan,
  StyledImage,
  StyledLink,
  StyledSubTitle,
  StyledText,
  StyledTitle,
} from "./styles";

function Card({ type, children }: CardProps) {
  return <CardContainer type={type}>{children}</CardContainer>;
}

function Title({ children }: { children: ReactNode }) {
  return <StyledTitle>{children}</StyledTitle>;
}

function SubTitle({ children }: { children: ReactNode }) {
  return <StyledSubTitle>{children}</StyledSubTitle>;
}

function CardHeader({ children }: { children: ReactNode }) {
  return <CardHeaderContainer>{children}</CardHeaderContainer>;
}

function CardLabel({ children }: { children: ReactNode }) {
  return <CardSpan>{children}</CardSpan>;
}

function CardText({ children }: { children: ReactNode }) {
  return <StyledText>{children}</StyledText>;
}

function CardLink({ children }: { children: ReactNode }) {
  return <StyledLink href="#">{children}</StyledLink>;
}

interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

function CardImage({ ...props }: CardImageProps) {
  return (
    <StyledImage>
      <img {...props} />
    </StyledImage>
  );
}

Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Header = CardHeader;
Card.Label = CardLabel;
Card.Text = CardText;
Card.Link = CardLink;
Card.Image = CardImage;

export { Card };
