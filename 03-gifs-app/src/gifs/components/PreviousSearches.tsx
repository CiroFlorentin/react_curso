interface PreviousSearchesProps {
  title: string;
  searches: string[];
  onTermClick: (term: string) => void;
}

export const PreviousSearches = ({
  title,
  searches,
  onTermClick,
}: PreviousSearchesProps) => {
  return (
    <div className='previous-searches'>
      <h2>{title}</h2>
      <ul className='previous-searches-list'>
        {searches.map((item) => (
          <li key={item} onClick={() => onTermClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
