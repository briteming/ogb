import { Card } from "../../components/Card";
import { CardProfileContainer, ContentContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SearchForm } from "../../components/SearchForm";

export function Home() {
  return (
    <>
      <Card type="profile">
        <CardProfileContainer>
          <Card.Image src="https://github.com/omarcoaur3lio.png" />
          <div style={{ flex: 1 }}>
            <Card.Header>
              <Card.Title>Marco Aurélio</Card.Title>
              <Card.Link>
                GitHub
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Card.Link>
            </Card.Header>
            <Card.Text>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </Card.Text>
            <Card.Footer>
              <Card.FooterItem>
                <FontAwesomeIcon icon={faGithub} size="1x" />
                <span>omarcoaur3lio</span>
              </Card.FooterItem>
              <Card.FooterItem>
                <FontAwesomeIcon icon={faBuilding} />
                <span>Synter</span>
              </Card.FooterItem>
              <Card.FooterItem>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>32 seguidores</span>
              </Card.FooterItem>
            </Card.Footer>
          </div>
        </CardProfileContainer>
      </Card>
      <SearchForm />
      <ContentContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>
            <Card.Header>
              <Card.SubTitle>
                JavaScript data types and data structures
              </Card.SubTitle>
              <Card.Label>Há 1 dia</Card.Label>
            </Card.Header>
            <Card.Text>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </Card.Text>
          </Card>
        ))}
      </ContentContainer>
    </>
  );
}
