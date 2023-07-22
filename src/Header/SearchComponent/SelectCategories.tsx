import { BsChevronDown } from "react-icons/bs";
import { styled } from "styled-components";
import { categories } from "../../Types";
import { categoryOptions } from "../../CommonVariables";

export const SelectCategories = ({
  category,
  setCategory,
}: {
  category: categories;
  setCategory: React.Dispatch<React.SetStateAction<categories>>;
}) => {
  const selected = categoryOptions.find(
    (option) => option.id === category
  )?.name;

  return (
    <Wrapper>
      <NativeSelect
        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          const element = e.target as HTMLSelectElement;
          setCategory(element.value as categories);
        }}
      >
        {categoryOptions.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </NativeSelect>
      <Presentation>
        <>
          <span>{selected}</span>
          <span>
            <BsChevronDown />
          </span>
        </>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  font-size: inherit;
  background-color: black;
  color: white;
`;

const Presentation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  border-radius: 10px;

  ${Wrapper}:has(${NativeSelect}:focus) & {
    outline: 1px solid white;
  }

  @media only screen and (max-width: 600px) {
    span:first-child {
      display: none;
    }
  }
`;
