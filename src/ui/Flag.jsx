import styled from "styled-components";

export const Flag = styled.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`;

// function EmojiFlag({ flag, className }) {
//   const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
//     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
//     .join("");

//   return (
//     <span className={className}>
//       <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
//     </span>
//   );
// }
