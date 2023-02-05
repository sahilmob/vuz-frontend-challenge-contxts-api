/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { abilitiesList } from "../lib/constants";
import { useStore } from "../contexts/characters";
import { CharacterTableRow } from "./CharacterTableRow";

const colLabels = ["Character", "Tags", ...abilitiesList];

const tableStyles = css({
  margin: "auto",
  width: "85%",
  border: "none",
});

export default function CharactersTable() {
  const { state: characters } = useStore((store) => store.characters);

  return (
    <table css={tableStyles}>
      <thead>
        <tr>
          {colLabels.map((l, i) => (
            <th align="left" key={i}>
              {l}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {characters.map((c) => (
          <CharacterTableRow key={c.id} character={c} />
        ))}
      </tbody>
    </table>
  );
}
