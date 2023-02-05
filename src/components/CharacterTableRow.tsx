/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from "@emotion/react";

import { Tag } from "./styled/Tag";
import { Character } from "../types";
import { TableRow } from "./styled/TableRow";
import { useStore } from "../contexts/characters";
import { Avatar } from "../components/styled/Avatar";
import { Checkbox } from "../components/styled/Checkbox";

type Props = { character: Character };

const cellStyles = css({
  padding: "8px",
  border: "none",
});

const characterCellStyles = css({
  display: "flex",
  columnGap: "8px",
  alignItems: "center",
});

const tagsCellStyles = css({
  rowGap: "8px",
  display: "flex",
  columnGap: "8px",
});

const redAbilityCellStyles = css({
  padding: "8px",
  border: "none",
  color: "red",
});

export const CharacterTableRow: FC<Props> = ({ character }) => {
  const { state: isCharactersSelected, toggleSelectCharacter } = useStore(
    (store) => store.selectedCharacters[character.id]
  );

  return (
    <TableRow checked={!!isCharactersSelected} key={character.id}>
      <td css={cellStyles} width="20%">
        <span css={characterCellStyles}>
          <Checkbox
            value={character.id}
            checked={!!isCharactersSelected}
            onChange={() => toggleSelectCharacter(character.id, character)}
          />
          <Avatar src={character.image} diameter={30} />
          {character.name}
        </span>
      </td>
      <td css={cellStyles} width="30%">
        <span css={tagsCellStyles}>
          {character?.tags?.map((t, i) => (
            <Tag key={i}>{t.tag_name}</Tag>
          ))}
        </span>
      </td>
      {character.abilities.map((a, i) => (
        <td
          key={i}
          css={
            character.abilities[i].abilityScore === 10
              ? redAbilityCellStyles
              : cellStyles
          }
          width="10%"
        >
          {a.abilityScore}
        </td>
      ))}
    </TableRow>
  );
};
