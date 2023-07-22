import { calculateAge } from "../../CommonFunctions";
import { PersonDetails } from "../../Types";

export const BirthDeathDates = ({ data }: { data: PersonDetails }) => {
  const { birthday, deathday } = data;

  const age = calculateAge(new Date(data.birthday));
  return (
    <>
      <p>
        <span>Born: {birthday} </span>
        {!deathday && <span>({age} years old)</span>}
      </p>
      {deathday && <p>Death: {deathday} </p>}
    </>
  );
};
