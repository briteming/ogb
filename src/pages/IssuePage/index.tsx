import { Card } from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faChevronLeft,
  faCalendarDay,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ContentContainer } from "./styles";
export function IssuePage() {
  return (
    <>
      <Card type="profile">
        <Card.Header>
          <Card.Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Card.Link>

          <Card.Link href="https://github.com/omarcoaur3lio" target="_blank">
            <span>Ver no GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Card.Link>
        </Card.Header>
        <ContentContainer>
          <Card.Title>JavaScript data types and data structures</Card.Title>

          <Card.Footer>
            <Card.FooterItem>
              <FontAwesomeIcon icon={faGithub} />
              <span>omarcoaur3lio</span>
            </Card.FooterItem>
            <Card.FooterItem>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </Card.FooterItem>
            <Card.FooterItem>
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </Card.FooterItem>
          </Card.Footer>
        </ContentContainer>
      </Card>
    </>
  );
}
